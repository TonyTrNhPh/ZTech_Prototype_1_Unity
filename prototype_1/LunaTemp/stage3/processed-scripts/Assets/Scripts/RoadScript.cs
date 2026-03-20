using UnityEngine;

public class RoadScript : MonoBehaviour
{
    public float zBound = -15;
    public float speed = 20f;

    private void Update()
    {
        if (GameManager.Instance.IsGameOver()) return;
        Move();
        RepeatOutBound();
    }
    void Move()
    {
        if (!GameManager.Instance.IsGameStart())
        {
            if (GameManager.Instance.FPS60)
                transform.position += new Vector3(0, 0, -speed * Time.fixedDeltaTime);
            else
                transform.position += new Vector3(0, 0, -speed * Time.deltaTime);
        }
    }
    void RepeatOutBound()
    {
        if (transform.position.z < zBound)
            transform.position = new Vector3(10, 0, 0);
    }
}

