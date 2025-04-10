using Unity.VisualScripting;
using UnityEngine;

public class ObstacleBehavior : MonoBehaviour
{
    public float zBound = -35;
    public float speed = 20f;

    private PlayerController playerController;

    void Start()
    {
        playerController = GameObject.Find("Player").GetComponent<PlayerController>();
    }

    void Update()
    {
        if (playerController.gameOver == false)
        {
            transform.position += new Vector3(0, 0, -speed * Time.deltaTime);

            if (transform.position.z < zBound)
            {
                Destroy(gameObject);
            }
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Player"))
        {
            playerController.gameOver = true;
        }
    }
}
