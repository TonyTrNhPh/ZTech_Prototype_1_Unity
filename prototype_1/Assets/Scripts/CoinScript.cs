using UnityEngine;

public class CoinScript : MonoBehaviour
{
    [Header("Coin settings")]
    public float spinSpeed = 180f;
    public float zBound = -35;
    public float speed = 30f;

    [Header("Particle settings")]
    public float particleDuration = 0.2f;

    private Transform playerTransform; // Vị trí của người chơi
    public float moveSpeed = 30f;      // Tốc độ di chuyển của coin khi bị hút
    void Start()
    {
        playerTransform = GameObject.FindGameObjectWithTag("Player").transform; // Tìm đối tượng người chơi
    }

    void FixedUpdate()
    {
        if (GameManager.Instance.IsGameOver()) return;
        coinMove();
        Move();
    }

    void coinMove()
    {
        if (GameManager.Instance.IsMagnetActive())
        {
            float magnetRange = 10f; // Phạm vi hút coin (có thể điều chỉnh)
            float distanceToPlayer = Vector3.Distance(playerTransform.position, transform.position);

            if (distanceToPlayer <= magnetRange) // Chỉ hút coin trong phạm vi
            {
                Vector3 direction = (playerTransform.position - transform.position).normalized;
                transform.position = Vector3.MoveTowards(transform.position, playerTransform.position, moveSpeed * Time.fixedDeltaTime);
            }
        }
    }

    private void Update()
    {
        SpinAround();
        if (GameManager.Instance.IsGameOver()) return;
        DestroyOutBound();
    }

    void SpinAround()
    {
        if (GameManager.Instance.FPS60)
            transform.Rotate(0, 0, spinSpeed * Time.fixedDeltaTime, Space.Self);
        else
            transform.Rotate(0, 0, spinSpeed * Time.deltaTime, Space.Self);

    }

    void Move()
    {
        if (GameManager.Instance.FPS60)
            transform.position += new Vector3(0, 0, -speed * Time.fixedDeltaTime);
        else
            transform.position += new Vector3(0, 0, -speed * Time.deltaTime);
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
