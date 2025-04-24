using UnityEngine;
using System.Collections;

public class SpawnManager : MonoBehaviour
{
    [Header("Prefabs")]
    public GameObject[] obstaclePrefabs; // Array of obstacle prefabs
    public GameObject[] coinPrefabs;     // Array of coin prefabs
    public GameObject[] powerUpPrefabs; 
    [Header("Spawn Settings")]
    public float startDelay = 1f;        // Initial delay before spawning starts
    public float coinSpacing = 2f;       // Distance between coins in a row (Z-axis)
    public float spawnZPosition = 40f;   // Z position where objects spawn
    public float[] xSpawnPos = { -5f, 0f, 5f }; // Left, Middle, Right positions

    [Header("Coin Row Settings")]
    public int minCoinCount = 3;         // Minimum coins in a row
    public int maxCoinCount = 6;         // Maximum coins in a row
    public float coinHeight = 1f;        // Height for coins (on the ground)

    private Coroutine spawnCoroutine;
    private float repeatRate = 1f;

    void Awake()
    {
        transform.SetParent(null);
        DontDestroyOnLoad(gameObject);
    }

    void Start()
    {
        GameManager.OnGameStateChanged += HandleGameStateChanged;
        repeatRate = GameManager.Instance.initialRepeatRate; 
    }

    private void FixedUpdate()
    {
        repeatRate = GameManager.Instance.GetRepeatRate(); // Update repeatRate based on game state
    }

    void OnDestroy()
    {
        GameManager.OnGameStateChanged -= HandleGameStateChanged;
    }

    private void HandleGameStateChanged(GameState state)
    {
        if (state == GameState.Playing)
        {
            if (spawnCoroutine == null)
            {
                spawnCoroutine = StartCoroutine(SpawnObjectsCoroutine());
            }
        }
        else
        {
            if (spawnCoroutine != null)
            {
                StopCoroutine(spawnCoroutine);
                spawnCoroutine = null;
            }
        }
    }

    private IEnumerator SpawnObjectsCoroutine()
    {
        yield return new WaitForSeconds(startDelay);

        while (true)
        {
            if (GameManager.Instance.gameState == GameState.Playing)
            {
                SpawnObstaclesAndCoins();
            }
            yield return new WaitForSeconds(repeatRate);
        }
    }

    private void SpawnObstaclesAndCoins()
    {
        // Step 1: Decide how many obstacles to spawn (0 to 2, ensuring at least one rail is free)
        int maxObstacles = xSpawnPos.Length - 1; // Always leave at least one rail free
        int obstacleCount = Random.Range(0, maxObstacles + 1); // 0 to 2 obstacles
        bool[] railBlocked = new bool[xSpawnPos.Length]; // Track which rails are blocked

        // Step 2: Spawn obstacles on random rails
        for (int i = 0; i < obstacleCount; i++)
        {
            int railIndex;
            do
            {
                railIndex = Random.Range(0, xSpawnPos.Length); // Pick a random rail
            } while (railBlocked[railIndex]); // Ensure no duplicate rails

            railBlocked[railIndex] = true; // Mark this rail as blocked
            SpawnObstacle(railIndex);
        }



        // Step 3: Spawn a coin row on a random unblocked rail
        int unblockedRailCount = 0;
        int[] unblockedRails = new int[xSpawnPos.Length];
        for (int i = 0; i < railBlocked.Length; i++)
        {
            if (!railBlocked[i])
            {
                unblockedRails[unblockedRailCount] = i;
                unblockedRailCount++;
            }
        }

        if (unblockedRailCount > 0)
        {
            // Pick a random unblocked rail for coins
            int coinRailIndex = unblockedRails[Random.Range(0, unblockedRailCount)];
            SpawnCoinRow(coinRailIndex);
        }



        // Step 4: Spawn a power-up on a random unblocked rail
        int powerUpRailIndex = Random.Range(0, xSpawnPos.Length);
        float spawnChance = 0.1f;
        if(Random.value < spawnChance)
        {
            while (railBlocked[powerUpRailIndex]) // Ensure the rail is not blocked
            {

                powerUpRailIndex = Random.Range(0, xSpawnPos.Length);
            }
            SpawnPowerUp(powerUpRailIndex);
        }

    }

 
   

    private void SpawnObstacle(int railIndex)
    {
        int obstacleType = Random.Range(0, obstaclePrefabs.Length); // Random obstacle type
        float xPos = xSpawnPos[railIndex];
        Vector3 spawnPos = new Vector3(xPos, 0f, spawnZPosition);
        Instantiate(obstaclePrefabs[obstacleType], spawnPos, obstaclePrefabs[obstacleType].transform.rotation);
    }

    private void SpawnPowerUp(int railIdex)
    {
        int powerUpType = Random.Range(0, powerUpPrefabs.Length); 
        float xPos = xSpawnPos[railIdex];
        Vector3 spawnPos = new Vector3(xPos, 1f, spawnZPosition);
        Instantiate(powerUpPrefabs[powerUpType], spawnPos, powerUpPrefabs[powerUpType].transform.rotation);
    }

    private void SpawnCoinRow(int railIndex)
    {
        float xPos = xSpawnPos[railIndex];
        float zPos = spawnZPosition;
        int coinCount = Random.Range(minCoinCount, maxCoinCount + 1);

        for (int i = 0; i < coinCount; i++)
        {
            int coinType = Random.Range(0, coinPrefabs.Length);
            Vector3 spawnPosition = new Vector3(xPos, coinHeight, zPos);
            Instantiate(coinPrefabs[coinType], spawnPosition, coinPrefabs[coinType].transform.rotation);
            zPos += coinSpacing; // Move forward for the next coin
        }
    }
}