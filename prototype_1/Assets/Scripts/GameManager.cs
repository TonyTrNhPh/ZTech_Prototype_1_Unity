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
    private bool gameOver = false;

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
        gameOver = false;
    }

    private void HandleGamePlayingScreen()
    {
        score = 0;
        coin = 0;
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
            score += scoreToAdd * multiple;
            ScreenManager.Instance.UpdateScoreUI(score);
        }
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