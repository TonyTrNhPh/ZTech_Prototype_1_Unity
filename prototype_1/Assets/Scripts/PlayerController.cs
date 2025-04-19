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
    private Rigidbody playerRb;
    private Animator playerAnim;
    private BoxCollider playerCol;

    [Header("Audio")]
    public AudioSource audioSource; 
    public AudioClip jumpSound; 
    public AudioClip rollSound; 
    public AudioClip deathSound; 

    private bool isShieldActive = false;

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

    private void PlayerInput()
    {
        if (GameManager.Instance.IsGameOver()) return;

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
            dirtParti.Stop();
            audioSource.PlayOneShot(jumpSound);
        }

        if (Input.GetKeyDown(KeyCode.DownArrow) && !isRolling)
        {
            isRolling = true;
            rollTimer = 0f;
            playerAnim.SetTrigger("Roll_trig");
            StartCoroutine(ReduceColliderHeight(0.35f));
            dirtParti.Stop();
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

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isOnGround = true;
        }
        else if (collision.gameObject.CompareTag("Obstacle") )
        {
            if (isShieldActive) // Kiểm tra nếu Shield đang hoạt động
            {
                isShieldActive = false; // Tắt Shield sau khi sử dụng
                Destroy(collision.gameObject); // Phá hủy chướng ngại vật
                return; // Kết thúc xử lý va chạm
            }
            GameManager.Instance.UpdateGameState(GameState.GameOver); // Kết thúc trò chơi
        }
    }
    public void EnableShield()
    {
        isShieldActive = true; // Kích hoạt Shield
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