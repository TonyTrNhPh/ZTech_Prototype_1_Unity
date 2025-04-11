using UnityEngine;

public class SpawnManager : MonoBehaviour
{
    public GameObject[] obstaclePrefabs; // Array of obstacle prefabs
    public GameObject[] coinPrefabs;     // Array of coin prefabs
    public float startDelay = 2;
    public float repeatRate = 2.0f;
    public float coinSpacing = 2.0f;     // Distance between coins in a row (Z-axis)

    private float[] xSpawnPos = { -5, 0, 5 }; // Left, Middle, Right positions
    private PlayerController playerController;

    void Start()
    {
        playerController = GameObject.Find("Player").GetComponent<PlayerController>();
        InvokeRepeating("SpawnObjects", startDelay, repeatRate);
    }

    void SpawnObjects()
    {
        if (!playerController.gameOver)
        {
            // Always spawn obstacles and coins together
            SpawnObstaclesAndCoins();
        }
    }

    void SpawnObstaclesAndCoins()
    {
        // Step 1: Spawn 0 to 3 obstacles, ensuring no duplicate rails
        int obstacleCount = Random.Range(0, 4); // 0 to 3 obstacles
        bool[] railBlocked = new bool[3]; // Track which rails are blocked (false = not blocked)
        int type = Random.Range(0, obstaclePrefabs.Length); // Random obstacle type

        for (int i = 0; i < obstacleCount; i++)
        {
            int railIndex;
            do
            {
                railIndex = Random.Range(0, xSpawnPos.Length); // Pick a random rail
            } while (railBlocked[railIndex]); // Keep trying until we find an unblocked rail

            railBlocked[railIndex] = true; // Mark this rail as blocked
            float xPos = xSpawnPos[railIndex];
            Instantiate(obstaclePrefabs[0], new Vector3(xPos, 0, 20), obstaclePrefabs[0].transform.rotation);
        }

        // Step 2: Spawn 1 to 3 coin rows on unblocked rails
        int availableRails = 0;
        for (int i = 0; i < railBlocked.Length; i++)
        {
            if (!railBlocked[i]) availableRails++; // Count unblocked rails
        }

        if (availableRails == 0) return; // No unblocked rails, skip coin spawning

        int coinRowCount = Random.Range(1, availableRails + 1); // 1 to number of unblocked rails
        bool[] coinSpawned = new bool[3]; // Track where coins are spawned

        for (int i = 0; i < coinRowCount; i++)
        {
            int railIndex;
            do
            {
                railIndex = Random.Range(0, xSpawnPos.Length); // Pick a random rail
            } while (railBlocked[railIndex] || coinSpawned[railIndex]); // Must be unblocked and not already have coins

            coinSpawned[railIndex] = true; // Mark this rail as having coins
            SpawnCoinRow(railIndex);
        }
    }

    void SpawnCoinRow(int railIndex)
    {
        float xPos = xSpawnPos[railIndex];
        float zPos = 40f;
        int coinCount = Random.Range(5, 8);

        for (int j = 0; j < coinCount; j++)
        {
            int coinType = Random.Range(0, coinPrefabs.Length);
            Vector3 spawnPosition = new Vector3(xPos, 1.0f, zPos);
            Instantiate(coinPrefabs[coinType], spawnPosition, coinPrefabs[coinType].transform.rotation);
            zPos -= coinSpacing;
        }
    }
}