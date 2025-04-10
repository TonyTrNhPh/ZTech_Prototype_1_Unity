using UnityEngine;
using UnityEngine.Rendering;

public class SpawnManager : MonoBehaviour
{
    public GameObject[] obstaclePrefabs;
    public float startDelay = 2;
    public float repeatRate = 2.0f;

    private float[] xSpawnPos = { -5, 0, 5 };
    private PlayerController playerController;

    void Start()
    {
        playerController = GameObject.Find("Player").GetComponent<PlayerController>();
        InvokeRepeating("SpawnObstacles", startDelay, repeatRate);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void SpawnObstacles()
    {
        if (!playerController.gameOver)
        {
            float xPos = xSpawnPos[Random.Range(0, xSpawnPos.Length)];
            int count = Random.Range(1, 3);
            int type = Random.Range(0, obstaclePrefabs.Length);
            for (int i = 0; i < count; i++)
            {
                xPos = xSpawnPos[Random.Range(0, xSpawnPos.Length)];
                Instantiate(obstaclePrefabs[type], new Vector3(xPos, 0, 20), obstaclePrefabs[type].transform.rotation);
            }
        }
    }
}
