using UnityEngine;

public class FenceScript : MonoBehaviour
{
    public float zBound = -35;
    public float speed = 20f;

    void Update()
    {
        if (GameManager.Instance.IsGameOver()) return;
        Move();
        DestroyOutBound();
    }

    void Move()
    {
        transform.position += new Vector3(0, 0, -speed * Time.deltaTime);
    }

    void DestroyOutBound()
    {
        if (transform.position.z < zBound) Destroy(gameObject);
    }
}
