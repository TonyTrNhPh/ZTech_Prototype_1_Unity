using UnityEngine;
using System.Collections;

public class SpawnManager : MonoBehaviour
{
    public GameObject[] obstaclePrefabs;
    public GameObject[] coinPrefabs;
    public GameObject[] powerUpPrefabs;

    public float startDelay = 1f;
    public float repeatRate = 1f;
    public float coinSpacing = 2f;
    public float spawnZPosition = 40f;
    public float[] xSpawnPos = { -5f, 0f, 5f };

    public int minCoinCount = 3;
    public int maxCoinCount = 6;

    private bool isSpawning = false;

    void Start()
    {
        isSpawning = true;
        StartCoroutine(SpawnObjectsCoroutine());
    }

    private IEnumerator SpawnObjectsCoroutine()
    {
        yield return new WaitForSeconds(startDelay);

        while (isSpawning)
        {
            SpawnObstaclesAndCoins();
            yield return new WaitForSeconds(repeatRate);
        }
    }

    private void SpawnObstaclesAndCoins()
    {
        int maxObstacles = xSpawnPos.Length - 1;
        int obstacleCount = Random.Range(0, maxObstacles + 1);
        bool[] railBlocked = new bool[xSpawnPos.Length];

        for (int i = 0; i < obstacleCount; i++)
        {
            int railIndex;
            do
            {
                railIndex = Random.Range(0, xSpawnPos.Length);
            } while (railBlocked[railIndex]);

            railBlocked[railIndex] = true;
            SpawnObstacle(railIndex);
        }

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
            int coinRailIndex = unblockedRails[Random.Range(0, unblockedRailCount)];
            SpawnCoinRow(coinRailIndex);
        }

        int powerUpRailIndex = Random.Range(0, xSpawnPos.Length);
        float spawnChance = 0.3f;
        if (Random.value < spawnChance)
        {
            while (railBlocked[powerUpRailIndex])
            {
                powerUpRailIndex = Random.Range(0, xSpawnPos.Length);
            }
            SpawnPowerUp(powerUpRailIndex);
        }
    }

    private void SpawnObstacle(int railIndex)
    {
        int obstacleType = Random.Range(0, obstaclePrefabs.Length);
        float xPos = xSpawnPos[railIndex];
        Vector3 spawnPos = new Vector3(xPos, 0f, spawnZPosition);
        Instantiate(obstaclePrefabs[obstacleType], spawnPos, obstaclePrefabs[obstacleType].transform.rotation);
    }

    private void SpawnPowerUp(int railIndex)
    {
        int powerUpType = Random.Range(0, powerUpPrefabs.Length);
        float xPos = xSpawnPos[railIndex];
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
            Vector3 spawnPosition = new Vector3(xPos, 1.5f, zPos);
            Instantiate(coinPrefabs[coinType], spawnPosition, coinPrefabs[coinType].transform.rotation);
            zPos += coinSpacing;
        }
    }
}