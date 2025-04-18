using UnityEngine;
using System.Collections;
using Unity.VisualScripting;

public class Magnet : MonoBehaviour
{
    [Header("Magnet settings")]
    public float spinSpeed = 180f;
    public float zBound = -35;
    public float speed = 20f;

    [Header("Particle settings")]
    public float magnetDuration = 5f; // Thời gian hiệu ứng nam châm
    private ParticleSystem MagnetParti;


    void Start()
    {
        MagnetParti = GetComponentInChildren<ParticleSystem>();
    }

    void FixedUpdate()
    {
        if (GameManager.Instance.IsGameOver()) return;
        Move();
        DestroyOutBound();
    }

    void Move()
    {
        transform.position += new Vector3(0, 0, -speed * Time.fixedDeltaTime);
    }
    void DestroyOutBound()
    {
        if (transform.position.z < zBound) Destroy(gameObject);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            // Kích hoạt hiệu ứng nam châm
            //GameManager.Instance.ActivateMagnet();
            Destroy(gameObject); 
        }
    }
}
