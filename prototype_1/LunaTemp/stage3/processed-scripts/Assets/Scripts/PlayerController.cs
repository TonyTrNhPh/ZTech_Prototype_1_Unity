using System.Collections;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement")]
    public float speed = 1.0f;
    public float jumpForce = 20.0f;
    public float xLeftRail = -5f;
    public float xRightRail = 5f;
    public float xMiddleRail = 0f;
    public float gravityModifier = -10.0f;

    [Header("Effects")]
    public ParticleSystem dirtParti;

    private int currentPos = 0;
    private float rollDuration = 0.3f;
    private float rollTimer = 0f;
    private bool isOnGround = true;
    private bool isRolling = false;
    private bool isFreeze = false;
    [Header("Swipe Input")]
    public float minSwipeDistance = 100f;
    public float maxSwipeTime = 0.5f;

    private Vector2 swipeStartPosition;
    private float swipeStartTime;

    private Rigidbody playerRb;
    private Animator playerAnim;
    private BoxCollider playerCol;

    [Header("Audio")]
    public AudioSource audioSource; 
    public AudioClip jumpSound; 
    public AudioClip rollSound; 
    public AudioClip deathSound; 


    void Start()
    {
        playerRb = GetComponent<Rigidbody>();
        playerAnim = GetComponent<Animator>();
        playerCol = GetComponent<BoxCollider>();
        audioSource = GetComponent<AudioSource>();
        Physics.gravity *= gravityModifier;
        GameManager.OnGameStateChanged += HandleGameStateChanged;
    }

    private void OnDestroy()
    {
        GameManager.OnGameStateChanged -= HandleGameStateChanged;
    }

    private void FixedUpdate()
    {
        SwitchRail();
    }

    void Update()
    {
        if (GameManager.Instance.IsGamePlaying())
        {
            PlayerInput();
        }
    }

    private void HandleGameStateChanged(GameState state)
    {
        if (state == GameState.Playing)
        {
            
            currentPos = 0;
            isFreeze = false;
            isOnGround = true;
            isRolling = false;
            playerAnim.SetBool("Death_b", false);
            playerAnim.SetBool("Roll_b", false);
            playerAnim.SetBool("Jump_b", false);
            playerAnim.SetFloat("Speed_f", 1f);
            playerAnim.SetBool("Static_b", true);
            dirtParti.Play();
        }
        else if (state == GameState.GameOver)
        {
            isFreeze = true;
            playerAnim.SetInteger("DeathType_int", 1);
            playerAnim.SetBool("Death_b", true);
            playerAnim.SetFloat("Speed_f", 0);
            dirtParti.Stop();
        }
        else if (state == GameState.Start)
        {
            currentPos = 0;
            isFreeze = false;
            isOnGround = true;
            isRolling = false;
            playerAnim.SetBool("Death_b", false);
            playerAnim.SetBool("Roll_b", false);
            playerAnim.SetBool("Jump_b", false);
            playerAnim.SetFloat("Speed_f", 0.3f);
            playerAnim.SetBool("Static_b", true);
            dirtParti.Stop();
        }
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
    private Vector2 startPos;
    private Vector2 endPos;

    private void PlayerInput()
    {
        if (GameManager.Instance.IsGameOver()) return;

        if (Input.touchCount == 0) return;

        Touch touch = Input.GetTouch(0);

        switch (touch.phase)
        {
            case TouchPhase.Began:
                startPos = touch.position;
                break;

            case TouchPhase.Ended:
                endPos = touch.position;
                DetectSwipe();
                break;
        }
        
        if (isRolling)
        {
            rollTimer += Time.deltaTime;
            if (rollTimer >= rollDuration)
            {
                isRolling = false;
                rollTimer = 0f;
                playerAnim.SetBool("Roll_b", false);
                audioSource.PlayOneShot(rollSound);
            }
        }
    }
    
    private void DetectSwipe()
    {
        Vector2 delta = endPos - startPos;

        if (delta.magnitude < minSwipeDistance)
            return;

        if (Mathf.Abs(delta.x) > Mathf.Abs(delta.y))
        {
            if (delta.x > 0)
                ApplySwipeInput(SwipeDirection.Right);
            else
                ApplySwipeInput(SwipeDirection.Left);
        }
        else
        {
            if (delta.y > 0)
                ApplySwipeInput(SwipeDirection.Up);
            else
                ApplySwipeInput(SwipeDirection.Down);
        }
    }


    private void ApplySwipeInput(SwipeDirection swipeDirection)
    {
        if (swipeDirection == SwipeDirection.Left)
        {
            if (currentPos == 0)
            {
                currentPos = -1;
            }
            else if (currentPos == 1)
            {
                currentPos = 0;
            }
            return;
        }

        if (swipeDirection == SwipeDirection.Right)
        {
            if (currentPos == 0)
            {
                currentPos = 1;
            }
            else if (currentPos == -1)
            {
                currentPos = 0;
            }
            return;
        }

        if (swipeDirection == SwipeDirection.Up && isOnGround)
        {
            playerRb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            isOnGround = false;
            playerAnim.SetTrigger("Jump_trig");
            dirtParti.Stop();
            audioSource.PlayOneShot(jumpSound);
            return;
        }

        if (swipeDirection == SwipeDirection.Down && !isRolling)
        {
            isRolling = true;
            rollTimer = 0f;
            playerAnim.SetTrigger("Roll_trig");
            StartCoroutine(ReduceColliderHeight(0.35f));
            dirtParti.Stop();
        }
    }

    private enum SwipeDirection
    {
        None,
        Left,
        Right,
        Up,
        Down
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isOnGround = true;
            if (!isRolling) dirtParti.Play();
        }
        else if (collision.gameObject.CompareTag("Obstacle"))
        {
            if (!GameManager.Instance.IsShieldActive())
            {
                GameManager.Instance.UpdateGameState(GameState.GameOver);
            }
            else
            {
                StartCoroutine(StartInvulnerability(0.1f));
            }
        }
    }

    private IEnumerator StartInvulnerability(float duration)
    {
        yield return new WaitForSeconds(duration);
        GameManager.Instance.DisableShield();
        GameManager.Instance.UpdateActivePowerUpsUI();
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