using System;
using System.Collections;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameState gameState;
    public static event Action<GameState> OnGameStateChanged;
    public float scorePer = 0.2f;

    private int score = 0;
    private int coin = 0;
    private int doubleScore = 0;
    private bool gameOver = false;

    private int magent=0; 
    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }

        Application.targetFrameRate = 30;
    }

    void Start()
    {
        UpdateGameState(GameState.Start);
    }

    public void UpdateGameState(GameState newState)
    {
        gameState = newState;

        switch (gameState)
        {
            case GameState.Start:
                HandleGameStartScreen();
                break;
            case GameState.Playing:
                HandleGamePlayingScreen();
                break;
            case GameState.GameOver:
                HandleGameOverScreen();
                break;
        }

        OnGameStateChanged?.Invoke(newState);
    }

    private void HandleGameStartScreen()
    {
        score = 0;
        coin = 0;
        doubleScore = 0;
        gameOver = false;
    }

    private void HandleGamePlayingScreen()
    {
        score = 0;
        coin = 0;
        doubleScore = 0;
        gameOver = false;
        StartCoroutine(IncreaseScoreOverTime(scorePer));
    }

    private void HandleGameOverScreen()
    {
        gameOver = true;
    }

    private IEnumerator IncreaseScoreOverTime(float repeatRate)
    {
        while (!gameOver)
        {
            yield return new WaitForSeconds(repeatRate);
            UpdateScore(1, 1);
        }
    }

    public void UpdateScore(int scoreToAdd, int multiple)
    {
        if (!gameOver)
        {
            int finalMultiple = multiple;

            // Double the score if doubleScore is active
            if (doubleScore > 0)
            {
                finalMultiple *= (int)Mathf.Pow(2, doubleScore);
            }

            score += scoreToAdd * finalMultiple;
            ScreenManager.Instance.UpdateScoreUI(score);
        }
    }

    public void ActivateDoubleScore()
    {
        if (!gameOver)
        {
            doubleScore++; // Tăng giá trị doubleScore để kích hoạt hiệu ứng x2
            UpdateMultipleUI();
            StartCoroutine(DoubleScoreDuration());
        }
    }

    private void UpdateMultipleUI()
    {
        int multiple = (int)Mathf.Pow(2, doubleScore); // Tính giá trị multiple dựa trên số lần x2
        ScreenManager.Instance.UpdateMultipleUI(multiple); // Cập nhật UI
    }

    private IEnumerator DoubleScoreDuration()
    {
        yield return new WaitForSeconds(5f); // Hiệu ứng x2 kéo dài 5 giây
        doubleScore--; // Hết thời gian, tắt hiệu ứng x2
        UpdateMultipleUI(); 
    }

    public void ActivateMagnet()
    {
        if (!gameOver)
        {
            magent++; // Tăng số lượng Magnet
            StartCoroutine(MagnetDuration());
        }
    }

    private IEnumerator MagnetDuration()
    {
        yield return new WaitForSeconds(5f);
        magent--; 
    }

    public bool IsMagnetActive()
    {
        return magent > 0; 
    }


    public void UpdateCoin()
    {
        if (!gameOver)
        {
            coin++;
            ScreenManager.Instance.UpdateCoinUI(coin);
        }
    }

    public void TriggerGameOver()
    {
        if (!gameOver)
        {
            UpdateGameState(GameState.GameOver);
        }
    }

    public bool IsGameOver()
    {
        return gameOver;
    }

    public void ResetGame()
    {
        score = 0;
        coin = 0;
        gameOver = false;

        ScreenManager.Instance.UpdateScoreUI(0);
        ScreenManager.Instance.UpdateCoinUI(0);
        ScreenManager.Instance.UpdateMultipleUI(1);

        GameObject[] obstacles = GameObject.FindGameObjectsWithTag("Obstacle");
        foreach (GameObject obstacle in obstacles)
        {
            Destroy(obstacle);
        }

        GameObject[] coins = GameObject.FindGameObjectsWithTag("Coin");
        foreach (GameObject coin in coins)
        {
            Destroy(coin);
        }

        UpdateGameState(GameState.Playing);
    }
}

public enum GameState
{
    Start,
    Playing,
    GameOver
}