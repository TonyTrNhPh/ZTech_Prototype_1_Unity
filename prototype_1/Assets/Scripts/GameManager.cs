﻿using System;
using System.Collections;
using UnityEngine;
using TMPro;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameState gameState;
    public static event Action<GameState> OnGameStateChanged;

    [Header("Game Settings")]
    public float scorePer = 0.2f;
    public bool FPS60 = false;
    private int score = 0;
    private int coin = 0;
    private bool gameOver = false;
    private bool gameStart = true;
    private bool gamePlaying = false;

    [Header("UI Elements")]
    public TextMeshProUGUI scoreText;
    public TextMeshProUGUI coinText;
    public TextMeshProUGUI multipleText;
    public GameObject gameOverPanel;
    public GameObject gamePlayingPanel;
    public GameObject gameStartPanel;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            transform.SetParent(null);
            DontDestroyOnLoad(gameObject);
            if (FPS60)
            {
                Application.targetFrameRate = 60;
            }
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

        gameStartPanel.SetActive(gameState == GameState.Start);
        gamePlayingPanel.SetActive(gameState == GameState.Playing);
        gameOverPanel.SetActive(gameState == GameState.GameOver);

        OnGameStateChanged?.Invoke(newState);
    }

    private void HandleGameStartScreen()
    {
        score = 0;
        coin = 0;
        gameOver = false;
        gameStart = true;
        gamePlaying = false;
        UpdateScoreUI(score);
        UpdateCoinUI(coin);
        UpdateMultipleUI(1);

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
    }

    private void HandleGamePlayingScreen()
    {
        score = 0;
        coin = 0;
        gameOver = false;
        gameStart = false;
        gamePlaying = true;
        UpdateScoreUI(score);
        UpdateCoinUI(coin);
        UpdateMultipleUI(1);
        StartCoroutine(IncreaseScoreOverTime(scorePer));
    }

    private void HandleGameOverScreen()
    {
        gamePlaying = false;
        gameOver = true;
    }

    public void HandleRestartGame()
    {
        score = 0;
        coin = 0;
        gameOver = false;
        gameStart = false;
        gamePlaying = true;

        UpdateScoreUI(0);
        UpdateCoinUI(0);
        UpdateMultipleUI(1);

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
            UpdateScoreUI(score);
        }
    }

    public void UpdateCoin()
    {
        if (!gameOver)
        {
            coin++;
            UpdateCoinUI(coin);
        }
    }

    public bool IsGameOver()
    {
        return gameOver;
    }

    public bool IsGameStart()
    {
        return gameStart;
    }

    public bool IsGamePlaying()
    {
        return gamePlaying;
    }

    private void UpdateScoreUI(int score)
    {
        scoreText.text = score.ToString("000000");
    }

    private void UpdateCoinUI(int coin)
    {
        coinText.text = "$" + coin;
    }

    private void UpdateMultipleUI(int multiple)
    {
        multipleText.text = "x" + multiple;
    }

    public void StartButtonPressed()
    {
        UpdateGameState(GameState.Playing);
    }

    public void RestartButtonPressed()
    {
        HandleRestartGame();
    }

    public void ReturnToMenuButtonPressed()
    {
        UpdateGameState(GameState.Start);
    }

    public void ExitButtonPressed()
    {
        //Application.Quit();
        UnityEditor.EditorApplication.isPlaying = false;
    }
}

public enum GameState
{
    Start,
    Playing,
    GameOver
}