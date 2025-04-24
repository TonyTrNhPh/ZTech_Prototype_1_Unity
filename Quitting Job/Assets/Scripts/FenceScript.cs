using UnityEngine;

public class FenceScript : MonoBehaviour
{
    public float zBound = -35;
    public float speed = 30f;

    void FixedUpdate()
    {
        Move();
    }

    private void Update()
    {
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
}
