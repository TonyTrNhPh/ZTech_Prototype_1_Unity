using UnityEngine;

public class CoinScript : MonoBehaviour
{
    public float spinSpeed = 180f;
    public float zBound = -35;
    public float speed = 30f;

    void FixedUpdate()
    {
        Move();
    }

    private void Update()
    {
        SpinAround();
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
            Destroy(gameObject);
        }
    }
}
