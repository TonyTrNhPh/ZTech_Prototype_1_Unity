using UnityEngine;

public class RoadScript : MonoBehaviour
{
    public float zBound = -15;
    public float speed = 20f;
    public float zRepeat = 15f;

    private void Update()
    {
        Move();
        RepeatOutBound();
    }
    void Move()
    {
        transform.position += new Vector3(0, 0, -speed * Time.fixedDeltaTime);
    }
    void RepeatOutBound()
    {
        if (transform.position.z < zBound)
            transform.position = new Vector3(10, 0, zRepeat);
    }
}