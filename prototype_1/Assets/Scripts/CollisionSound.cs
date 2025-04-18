using UnityEngine;

public class CollisionSound : MonoBehaviour
{
    public AudioClip collisionClip; 
    private AudioSource audioSource;

    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }

    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Obstacle"))
        {
            audioSource.PlayOneShot(collisionClip);
        }
    }
}
