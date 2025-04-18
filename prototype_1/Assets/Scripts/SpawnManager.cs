using UnityEngine;
using System.Collections;

public class SpawnManager : MonoBehaviour
{
    [Header("Prefabs")]
    public GameObject[] obstaclePrefabs; // Array of obstacle prefabs
    public GameObject[] coinPrefabs;     // Array of coin prefabs
    public GameObject[] doubleScorePrefab;
    public GameObject[] magnetItemPrefab;
    public GameObject[] shieldItemPrefab;
    public int magnetSpawnChance = 2; 
    [Header("Spawn Settings")]
    public float startDelay = 1f;        // Initial delay before spawning starts
    public float repeatRate = 1f;        // Time between spawns
    public float coinSpacing = 2f;       // Distance between coins in a row (Z-axis)
    public float spawnZPosition = 40f;   // Z position where objects spawn
    public float[] xSpawnPos = { -5f, 0f, 5f }; // Left, Middle, Right positions

    [Header("Coin Row Settings")]
    public int minCoinCount = 3;         // Minimum coins in a row
    public int maxCoinCount = 6;         // Maximum coins in a row
    public float coinHeight = 1f;        // Height for coins (on the ground)

    private Coroutine spawnCoroutine;

    void Awake()
    {
        transform.SetParent(null);
        DontDestroyOnLoad(gameObject);
    }

    void Start()
    {
        GameManager.OnGameStateChanged += HandleGameStateChanged;
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

       
        int maxDoubleScore = xSpawnPos.Length - 1; 
        int DoubleScoreCount = Random.Range(0, maxDoubleScore + 1); 
        bool[] railBlockedForDoubleScore = new bool[xSpawnPos.Length]; 

        
        for (int i = 0; i < DoubleScoreCount; i++)
        {
            int railIndex;
            do
            {
                railIndex = Random.Range(0, xSpawnPos.Length); 
            } while (railBlockedForDoubleScore[railIndex]);

            railBlockedForDoubleScore[railIndex] = true;
            SpawnDoubleScore(railIndex);
        }

        int maxMagent = xSpawnPos.Length - 1;
        int MagentCount = Random.Range(0, maxMagent + 1);
        bool[] railBlockedForMagent = new bool[xSpawnPos.Length];
        if(MagentCount< magnetSpawnChance)
        for (int i = 0; i < MagentCount; i++)
        {
            int railIndex;
            do
            {
                railIndex = Random.Range(0, xSpawnPos.Length);
            } while (railBlockedForMagent[railIndex] && railBlockedForDoubleScore[railIndex]);

            railBlockedForMagent[railIndex] = true;
            SpawnMagnetItem(railIndex);
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
    }

    private void SpawnObstacle(int railIndex)
    {
        int obstacleType = Random.Range(0, obstaclePrefabs.Length); // Random obstacle type
        float xPos = xSpawnPos[railIndex];
        Vector3 spawnPos = new Vector3(xPos, 0f, spawnZPosition);
        Instantiate(obstaclePrefabs[obstacleType], spawnPos, obstaclePrefabs[obstacleType].transform.rotation);
    }

    private void SpawnDoubleScore(int railIndex)
    {
        int DoubleScoreType = Random.Range(0, doubleScorePrefab.Length); 
        float xPos = xSpawnPos[railIndex];
        Vector3 spawnPos = new Vector3(xPos, 1f, spawnZPosition);
        Instantiate(doubleScorePrefab[DoubleScoreType], spawnPos, doubleScorePrefab[DoubleScoreType].transform.rotation);
    }

    private void SpawnMagnetItem(int railIndex)
    {
        int MagnetItemType = Random.Range(0,magnetItemPrefab.Length);
        float xPos = xSpawnPos[railIndex];
        Vector3 spawnPos = new Vector3(xPos, 1f, spawnZPosition);
        Instantiate(magnetItemPrefab[MagnetItemType], spawnPos, magnetItemPrefab[MagnetItemType].transform.rotation);
    }

    private void SpawnshieldItem(int railIndex)
    {
        int shieldItemType = Random.Range(0, shieldItemPrefab.Length);
        float xPos = xSpawnPos[railIndex];
        Vector3 spawnPos = new Vector3(xPos, 1f, spawnZPosition);
        Instantiate(shieldItemPrefab[shieldItemType], spawnPos, shieldItemPrefab[shieldItemType].transform.rotation);
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