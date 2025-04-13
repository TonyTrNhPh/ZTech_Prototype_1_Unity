﻿using System.Collections;
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
    private float rollDuration = 0.7f;
    private float rollTimer = 0f;
    private bool isOnGround = true;
    private bool isRolling = false;
    private bool isFreeze = false;
    private Rigidbody playerRb;
    private Animator playerAnim;

    void Start()
    {
        playerRb = GetComponent<Rigidbody>();
        playerAnim = GetComponent<Animator>();
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
        PlayerInput();
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
            playerAnim.SetFloat("Speed_f", 1f);
            dirtParti.Play();
            transform.position = new Vector3(xMiddleRail, transform.position.y, -10f); 
        }
        else if (state == GameState.GameOver)
        {
            dirtParti.Stop();
            isFreeze = true;
            playerAnim.SetBool("Death_b", true);
            playerAnim.SetInteger("DeathType_int", 1);
            playerAnim.SetFloat("Speed_f", 0f);
        }
        else if (state == GameState.Start)
        {
            isFreeze = true;
            dirtParti.Stop();
            playerAnim.SetBool("Death_b", false);
            playerAnim.SetFloat("Speed_f", 0f);
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
        }

        if (Input.GetKeyDown(KeyCode.DownArrow) && !isRolling)
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
            isOnGround = true;
            dirtParti.Play();
        }
        else if (collision.gameObject.CompareTag("Obstacle"))
        {
            GameManager.Instance.TriggerGameOver();
        }
    }
}