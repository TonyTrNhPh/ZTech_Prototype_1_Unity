using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ScreenManager : MonoBehaviour
{
    public TextMeshProUGUI scoreText;
    public TextMeshProUGUI coinText;
    public TextMeshProUGUI multipleText;
    public GameObject gameOverPanel;
    public GameObject gamePlayingPanel;
    public GameObject gameStartPanel;

    public static ScreenManager Instance;

    private void Awake()
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

        GameManager.OnGameStateChanged += HandleGameStateChangedScreen;
    }

    private void OnDestroy()
    {
        GameManager.OnGameStateChanged -= HandleGameStateChangedScreen;
    }

    private void HandleGameStateChangedScreen(GameState state)
    {
        gameStartPanel.SetActive(state == GameState.Start);
        gamePlayingPanel.SetActive(state == GameState.Playing);
        gameOverPanel.SetActive(state == GameState.GameOver);

        if (state == GameState.Start || state == GameState.Playing)
        {
            UpdateScoreUI(0);
            UpdateCoinUI(0);
            UpdateMultipleUI(1);
        }
    }

    public void UpdateScoreUI(int score)
    {
        scoreText.text = score.ToString("000000");
    }

    public void UpdateCoinUI(int coin)
    {
        coinText.text = "$" + coin;
    }

    public void UpdateMultipleUI(int multiple)
    {
        multipleText.text = "x" + multiple;
    }

    public void StartButtonPressed()
    {
        GameManager.Instance.UpdateGameState(GameState.Playing);
    }

    public void RestartButtonPressed()
    {
        ResetUI();
        GameManager.Instance.HandleRestartGame();
    }

    public void ReturnToMenuButtonPressed()
    {
        GameManager.Instance.UpdateGameState(GameState.Start);
    }

    public void ExitButtonPressed()
    {
        Application.Quit();
    }

    public void ResetUI()
    {
        UpdateCoinUI(0);
        UpdateScoreUI(0);
        UpdateMultipleUI(1);
    }

    
}