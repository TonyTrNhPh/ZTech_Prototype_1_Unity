using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SocialPlatforms.Impl;

public class CollectibleBehavior : MonoBehaviour
{
    public float spinSpeed = 180f;
    public float zBound = -35;
    public float speed = 30f;

    private PlayerController playerController;

    void Start()
    {
        playerController = GameObject.Find("Player").GetComponent<PlayerController>();
    }

    void Update()
    {
        transform.Rotate(0, 0, spinSpeed * Time.deltaTime, Space.Self);
        if (playerController.gameOver == false)
        {
            transform.position += new Vector3(0, 0, -speed * Time.deltaTime);

            if (transform.position.z < zBound)
                Destroy(gameObject);
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            playerController.UpdateCoin();
            playerController.PlayCoinParticle();
            Destroy(gameObject);
        }
    }
}
