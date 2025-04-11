using System;
using System.Collections;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 1.0f;
    public float jumpForce  = 20.0f;
    public float xLeftRail = -5f;
    public float xRightRail = 5f;
    public float xMiddleRail = 0f;
    public float gravityModifier = -10.0f;
    public bool gameOver = false;
    public ParticleSystem dirtParti;
    public ParticleSystem coinParti;

    private int currentPos = 0;
    private float rollDuration = 0.7f;
    private float rollTimer = 0f;
    private bool isOnGround = true;
    private bool isRolling = false;
    private Rigidbody playerRb;
    private Animator playerAnim;
    private bool isFreeze = false;
    private int score = 0;

    void Start()
    {
        currentPos = 0;
        playerRb = GetComponent<Rigidbody>();
        playerAnim = GetComponent<Animator>();
        Physics.gravity *= gravityModifier;
        dirtParti.Play();
        Console.WriteLine("Game Started");
    }

    private void FixedUpdate()
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

    void Update()
    {

        if (Input.GetKeyDown(KeyCode.LeftArrow) && !gameOver)
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

        if (Input.GetKeyDown(KeyCode.RightArrow) && !gameOver)
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
        if (Input.GetKeyDown(KeyCode.UpArrow) && isOnGround && !gameOver)
        {
            playerRb.AddForce(Vector3.up*jumpForce, ForceMode.Impulse);
            isOnGround = false;
            playerAnim.SetTrigger("Jump_trig");
            dirtParti.Stop();
        }
        if (Input.GetKeyDown(KeyCode.DownArrow) && !isRolling && !gameOver)
        {
            isRolling = true;
            rollTimer = 0f;
            playerAnim.SetTrigger("Roll_trig");
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
            }
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isOnGround=true;
            dirtParti.Play();
        }
        if (collision.gameObject.CompareTag("Obstacle"))
        {
            dirtParti.Stop();
            isFreeze = true;
            gameOver = true;
            playerAnim.SetBool("Death_b", true);
            playerAnim.SetInteger("DeathType_int", 1);
            Console.WriteLine("Game Over");
        }
        if (collision.gameObject.CompareTag("Coin"))
        {
            score++;
            Debug.Log("Score: " + score);
        }
    }
    public void PlayCoinParticle()
    {
        if (coinParti != null && !coinParti.isPlaying)
        {
            StartCoroutine(PlayParticleForDuration(0.5f));
        }
    }
    private IEnumerator PlayParticleForDuration(float duration)
    {
        coinParti.Play();
        yield return new WaitForSeconds(duration);
        coinParti.Stop();
    }
}
