using UnityEngine;
using System.Collections;
using Unity.VisualScripting;

public class ShieldItem:MonoBehaviour
{
    [Header("ShieldItem settings")]
    public float spinSpeed = 180f;
    public float zBound = -35;
    public float speed = 20f;
    [Header("Particle settings")]
    private ParticleSystem ShieldItemParti;
    public float particleDuration = 0.2f;
    void Start()
    {
        ShieldItemParti = GetComponentInChildren<ParticleSystem>();
    }
    void FixedUpdate()
    {
        SpinAround();
        if (GameManager.Instance.IsGameOver()) return;
        Move();
        DestroyOutBound();
    }
    void SpinAround()
    {
        transform.Rotate(0, 0, spinSpeed * Time.fixedDeltaTime, Space.Self);
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
            GameManager.Instance.ActivateDoubleScore();
            Destroy(gameObject);
        }
    }
}
