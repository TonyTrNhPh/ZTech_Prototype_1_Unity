using UnityEngine;

public class FenceScript : MonoBehaviour
{
    public float zBound = -35;
    public float speed = 30f;

    void FixedUpdate()
    {
        if (GameManager.Instance.IsGameOver()) return;
        Move();
    }

    private void Update()
    {
        if (GameManager.Instance.IsGameOver()) return;
        DestroyOutBound();
    }

    void Move()
    {
        if (GameManager.Instance.FPS60)
            transform.position += new Vector3(0, 0, -speed * Time.fixedDeltaTime);
        else
            transform.position += new Vector3(0, 0, -speed * Time.deltaTime);
    }

    void DestroyOutBound()
    {
        if (transform.position.z < zBound) Destroy(gameObject);
    }
}
