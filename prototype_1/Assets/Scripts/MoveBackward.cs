using UnityEngine;

public class MoveBackward : MonoBehaviour
{
    public float zBound=-35;
    public float speed = 20f;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.position += new Vector3(0, 0, -speed*Time.deltaTime);

        if (transform.position.z < zBound)
            transform.position = new Vector3(0, 0, 0);
    }
}
