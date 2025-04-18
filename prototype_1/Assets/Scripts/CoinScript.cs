﻿using System.Collections;
using Unity.VisualScripting;
using UnityEngine;

public class CoinScript : MonoBehaviour
{
    [Header("Coin settings")]
    public float spinSpeed = 180f;
    public float zBound = -35;
    public float speed = 20f;

    [Header("Particle settings")]
    private ParticleSystem coinParti;
    public float particleDuration = 0.2f;

    private Transform playerTransform; // Vị trí của người chơi
    public float moveSpeed = 100f;      // Tốc độ di chuyển của coin khi bị hút

    void Start()
    {
        coinParti = GetComponentInChildren<ParticleSystem>();
        playerTransform = GameObject.FindGameObjectWithTag("Player").transform; // Tìm đối tượng người chơi
    }

    void FixedUpdate()
    {
        SpinAround();
        if (GameManager.Instance.IsGameOver()) return;
        if(GameManager.Instance.IsMagnetActive())
        {
            
            Vector3 direction = (playerTransform.position - transform.position).normalized;
            transform.position = Vector3.MoveTowards(transform.position, playerTransform.position, moveSpeed * Time.fixedDeltaTime);
            return;
        }
        Move();
        DestroyOutBound();

    }


    void SpinAround()
    {
        transform.Rotate(0, 0, spinSpeed * Time.fixedDeltaTime, Space.Self);
    }

    void Move()
    {
        transform.position += new Vector3(0, 0, -speed * Time.fixedDeltaTime);
    }

    void DestroyOutBound()
    {
        if (transform.position.z < zBound) Destroy(gameObject);
    }


    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            GameManager.Instance.UpdateCoin();
            Destroy(gameObject);
        }
    }
}
