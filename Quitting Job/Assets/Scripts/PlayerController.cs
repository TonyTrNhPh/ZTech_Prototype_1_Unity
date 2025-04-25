using System.Collections;
using UnityEngine;
using UnityEngine.Analytics;

public class PlayerController : MonoBehaviour
{
    public float speed = 15.0f;
    public float jumpForce = 150.0f;
    public float xLeftRail = -5f;
    public float xRightRail = 5f;
    public float xMiddleRail = 0f;
    public float gravityModifier = 4.0f;
    private int currentPos = 0;
    private float rollDuration = 0.3f;
    private float rollTimer = 0f;
    private bool isOnGround = true;
    private bool isRolling = false;
    private bool isFreeze = false;
    private Rigidbody playerRb;
    private Animator playerAnim;
    private BoxCollider playerCol;

    void Start()
    {
        playerRb = GetComponent<Rigidbody>();
        playerAnim = GetComponent<Animator>();
        playerCol = GetComponent<BoxCollider>();
        Physics.gravity *= gravityModifier;
    }

    private void FixedUpdate()
    {
        SwitchRail();
    }

    void Update()
    {
        PlayerInput();
    }

    private void SwitchRail()
    {
        if (!isFreeze)
        {
            if (currentPos == 0)
            {
                transform.position = Vector3.MoveTowards(transform.position, new Vector3(xMiddleRail, transform.position.y, transform.position.z), speed * Time.deltaTime);
            }
            else if (currentPos == -1)
            {
                transform.position = Vector3.MoveTowards(transform.position, new Vector3(xLeftRail, transform.position.y, transform.position.z), speed * Time.deltaTime);
            }
            else if (currentPos == 1)
            {
                transform.position = Vector3.MoveTowards(transform.position, new Vector3(xRightRail, transform.position.y, transform.position.z), speed * Time.deltaTime);
            }
        }
    }

    private void PlayerInput()
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
            playerRb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            isOnGround = false;
            playerAnim.SetTrigger("Jump_trig");
        }

        if (Input.GetKeyDown(KeyCode.DownArrow) && !isRolling)
        {
            isRolling = true;
            rollTimer = 0f;
            playerAnim.SetTrigger("Roll_trig");
            StartCoroutine(ReduceColliderHeight(0.35f));
        }

        if (isRolling)
        {
            rollTimer += Time.deltaTime;
            if (rollTimer >= rollDuration)
            {
                isRolling = false;
                rollTimer = 0f;
            }
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isOnGround = true;
        }
    }

    private IEnumerator ReduceColliderHeight(float duration)
    {
        playerCol.center = new Vector3(0, 0.8f, 0);
        playerCol.size = new Vector3(1.2f, 1.5f, 1);
        yield return new WaitForSeconds(duration);
        playerCol.center = new Vector3(0, 1.5f, 0);
        playerCol.size = new Vector3(1.2f, 3f, 1);
    }
}