using System;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 1.0f;
    public float jumpForce  = 20.0f;
    public float xLeftRail = -2.5f;
    public float xRightRail = 2.5f;
    public float xMiddleRail = 0f;
    public float crounchHeight = 1.0f;

    private int currentPos = 0;
    //private Vector3 startPos = new Vector3(0, 1.0f, -10.0f);
    private Rigidbody rb;
    private bool isOnGround = true;
  

    void Start()
    {
        currentPos = 0;
        rb = GetComponent<Rigidbody>();
        
    }

    private void FixedUpdate()
    {
        if (currentPos == 0)
        {
            transform.position = Vector3.MoveTowards(transform.position, new Vector3(xMiddleRail,transform.position.y,transform.position.z),speed * Time.deltaTime);
        }
        else if (currentPos == -1)
        {
            transform.position = Vector3.MoveTowards(transform.position, new Vector3(xLeftRail,transform.position.y,transform.position.z),speed * Time.deltaTime);
        }
        else if (currentPos == 1)
        {
            transform.position = Vector3.MoveTowards(transform.position, new Vector3(xRightRail,transform.position.y,transform.position.z),speed * Time.deltaTime);
        }
    }

    void Update()
    {

        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            if (currentPos == 0)
            {
                currentPos = -1;
            }
            else if (currentPos == 1)
            {
                currentPos = 0;
            }
        }

        if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            if (currentPos == 0)
            {
                currentPos = 1;
            }
            else if (currentPos == -1)
            {
                currentPos = 0;
            }
        }
        if (Input.GetKeyDown(KeyCode.UpArrow) && isOnGround)
        {
            rb.AddForce(new Vector3(0,jumpForce,0), ForceMode.Impulse);
            isOnGround = false;
        }
    }
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isOnGround=true;
        }
    }
}
