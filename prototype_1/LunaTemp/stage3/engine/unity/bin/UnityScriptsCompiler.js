if ( TRACE ) { TRACE( JSON.parse( '["CoinScript#init","CoinScript#Start","CoinScript#FixedUpdate","CoinScript#coinMove","CoinScript#Update","CoinScript#SpinAround","CoinScript#Move","CoinScript#DestroyOutBound","CoinScript#OnTriggerEnter","DoubleScore#init","DoubleScore#Start","DoubleScore#FixedUpdate","DoubleScore#SpinAround","DoubleScore#Move","DoubleScore#DestroyOutBound","DoubleScore#OnTriggerEnter","FenceScript#init","FenceScript#FixedUpdate","FenceScript#Update","FenceScript#Move","FenceScript#DestroyOutBound","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#FixedUpdate","GameManager#Update","GameManager#UpdateGameState","GameManager#HandleGameStartScreen","GameManager#HandleGamePlayingScreen","GameManager#HandleGameOverScreen","GameManager#HandleRestartGame","GameManager#IncreaseScoreOverTime","GameManager#GetCurrentRepeatRate","GameManager#UpdateScore","GameManager#ActivateDoubleScore","GameManager#UpdateMultiple","GameManager#DoubleScoreDuration","GameManager#ActivateMagnet","GameManager#MagnetDuration","GameManager#IsMagnetActive","GameManager#UpdateCoin","GameManager#IsGameOver","GameManager#IsGameStart","GameManager#IsGamePlaying","GameManager#IsShieldActive","GameManager#EnableShield","GameManager#DisableShield","GameManager#GetRepeatRate","GameManager#UpdateScoreUI","GameManager#UpdateCoinUI","GameManager#UpdateMultipleUI","GameManager#UpdateActivePowerUpsUI","GameManager#StartButtonPressed","GameManager#RestartButtonPressed","GameManager#ReturnToMenuButtonPressed","GameManager#ExitButtonPressed","Magnet#init","Magnet#Start","Magnet#FixedUpdate","Magnet#Move","Magnet#DestroyOutBound","Magnet#OnTriggerEnter","PlayerController#init","PlayerController#Start","PlayerController#OnDestroy","PlayerController#FixedUpdate","PlayerController#Update","PlayerController#HandleGameStateChanged","PlayerController#SwitchRail","PlayerController#PlayerInput","PlayerController#DetectSwipe","PlayerController#ApplySwipeInput","PlayerController#OnCollisionEnter","PlayerController#StartInvulnerability","PlayerController#ReduceColliderHeight","RoadScript#init","RoadScript#Update","RoadScript#Move","RoadScript#RepeatOutBound","ShieldScript#init","ShieldScript#Start","ShieldScript#FixedUpdate","ShieldScript#SpinAround","ShieldScript#Move","ShieldScript#DestroyOutBound","ShieldScript#OnTriggerEnter","SpawnManager#init","SpawnManager#Awake","SpawnManager#Start","SpawnManager#FixedUpdate","SpawnManager#OnDestroy","SpawnManager#HandleGameStateChanged","SpawnManager#SpawnObjectsCoroutine","SpawnManager#SpawnObstaclesAndCoins","SpawnManager#SpawnObstacle","SpawnManager#SpawnPowerUp","SpawnManager#SpawnCoinRow"]' ) ); }
/**
 * @version 1.0.9575.28847
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CoinScript start.*/
    Bridge.define("CoinScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spinSpeed: 0,
            zBound: 0,
            speed: 0,
            particleDuration: 0,
            playerTransform: null,
            moveSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CoinScript#init", this ); }

                this.spinSpeed = 180.0;
                this.zBound = -35;
                this.speed = 30.0;
                this.particleDuration = 0.2;
                this.moveSpeed = 30.0;
            }
        },
        methods: {
            /*CoinScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CoinScript#Start", this ); }

                this.playerTransform = UnityEngine.GameObject.FindGameObjectWithTag("Player").transform;
            },
            /*CoinScript.Start end.*/

            /*CoinScript.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CoinScript#FixedUpdate", this ); }

                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.coinMove();
                this.Move();
            },
            /*CoinScript.FixedUpdate end.*/

            /*CoinScript.coinMove start.*/
            coinMove: function () {
if ( TRACE ) { TRACE( "CoinScript#coinMove", this ); }

                if (GameManager.Instance.IsMagnetActive()) {
                    var magnetRange = 10.0;
                    var distanceToPlayer = pc.Vec3.distance( this.playerTransform.position, this.transform.position );

                    if (distanceToPlayer <= magnetRange) {
                        var direction = (this.playerTransform.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                        this.transform.position = pc.Vec3.moveTowards( this.transform.position, this.playerTransform.position, this.moveSpeed * UnityEngine.Time.fixedDeltaTime );
                    }
                }
            },
            /*CoinScript.coinMove end.*/

            /*CoinScript.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CoinScript#Update", this ); }

                this.SpinAround();
                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.DestroyOutBound();
            },
            /*CoinScript.Update end.*/

            /*CoinScript.SpinAround start.*/
            SpinAround: function () {
if ( TRACE ) { TRACE( "CoinScript#SpinAround", this ); }

                if (GameManager.Instance.FPS60) {
                    this.transform.Rotate(0, 0, this.spinSpeed * UnityEngine.Time.fixedDeltaTime, UnityEngine.Space.Self);
                } else {
                    this.transform.Rotate(0, 0, this.spinSpeed * UnityEngine.Time.deltaTime, UnityEngine.Space.Self);
                }

            },
            /*CoinScript.SpinAround end.*/

            /*CoinScript.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "CoinScript#Move", this ); }

                if (GameManager.Instance.FPS60) {
                    this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.fixedDeltaTime ) );
                } else {
                    this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.deltaTime ) );
                }
            },
            /*CoinScript.Move end.*/

            /*CoinScript.DestroyOutBound start.*/
            DestroyOutBound: function () {
if ( TRACE ) { TRACE( "CoinScript#DestroyOutBound", this ); }

                if (this.transform.position.z < this.zBound) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*CoinScript.DestroyOutBound end.*/

            /*CoinScript.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "CoinScript#OnTriggerEnter", this ); }

                if (other.CompareTag("Player")) {
                    UnityEngine.Debug.Log$1("Coin collected!");
                    GameManager.Instance.UpdateCoin();
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*CoinScript.OnTriggerEnter end.*/


        }
    });
    /*CoinScript end.*/

    /*DoubleScore start.*/
    Bridge.define("DoubleScore", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spinSpeed: 0,
            zBound: 0,
            speed: 0,
            DoubleScoreParti: null,
            particleDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DoubleScore#init", this ); }

                this.spinSpeed = 180.0;
                this.zBound = -35;
                this.speed = 20.0;
                this.particleDuration = 0.2;
            }
        },
        methods: {
            /*DoubleScore.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DoubleScore#Start", this ); }

                this.DoubleScoreParti = this.GetComponentInChildren(UnityEngine.ParticleSystem);
            },
            /*DoubleScore.Start end.*/

            /*DoubleScore.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "DoubleScore#FixedUpdate", this ); }

                this.SpinAround();
                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.Move();
                this.DestroyOutBound();
            },
            /*DoubleScore.FixedUpdate end.*/

            /*DoubleScore.SpinAround start.*/
            SpinAround: function () {
if ( TRACE ) { TRACE( "DoubleScore#SpinAround", this ); }

                this.transform.Rotate(0, 0, this.spinSpeed * UnityEngine.Time.fixedDeltaTime, UnityEngine.Space.Self);
            },
            /*DoubleScore.SpinAround end.*/

            /*DoubleScore.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "DoubleScore#Move", this ); }

                this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.fixedDeltaTime ) );
            },
            /*DoubleScore.Move end.*/

            /*DoubleScore.DestroyOutBound start.*/
            DestroyOutBound: function () {
if ( TRACE ) { TRACE( "DoubleScore#DestroyOutBound", this ); }

                if (this.transform.position.z < this.zBound) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*DoubleScore.DestroyOutBound end.*/

            /*DoubleScore.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "DoubleScore#OnTriggerEnter", this ); }

                if (other.CompareTag("Player")) {
                    GameManager.Instance.ActivateDoubleScore();
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*DoubleScore.OnTriggerEnter end.*/


        }
    });
    /*DoubleScore end.*/

    /*FenceScript start.*/
    Bridge.define("FenceScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            zBound: 0,
            speed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FenceScript#init", this ); }

                this.zBound = -35;
                this.speed = 30.0;
            }
        },
        methods: {
            /*FenceScript.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "FenceScript#FixedUpdate", this ); }

                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.Move();
            },
            /*FenceScript.FixedUpdate end.*/

            /*FenceScript.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FenceScript#Update", this ); }

                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.DestroyOutBound();
            },
            /*FenceScript.Update end.*/

            /*FenceScript.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "FenceScript#Move", this ); }

                if (GameManager.Instance.FPS60) {
                    this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.fixedDeltaTime ) );
                } else {
                    this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.deltaTime ) );
                }
            },
            /*FenceScript.Move end.*/

            /*FenceScript.DestroyOutBound start.*/
            DestroyOutBound: function () {
if ( TRACE ) { TRACE( "FenceScript#DestroyOutBound", this ); }

                if (this.transform.position.z < this.zBound) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*FenceScript.DestroyOutBound end.*/


        }
    });
    /*FenceScript end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            },
            events: {
                OnGameStateChanged: null
            }
        },
        fields: {
            gameState: 0,
            scorePer: 0,
            FPS60: false,
            score: 0,
            coin: 0,
            gameOver: false,
            gameStart: false,
            gamePlaying: false,
            doubleScore: 0,
            magent: false,
            shield: false,
            scoreText: null,
            coinText: null,
            multipleText: null,
            activePowerUpsText: null,
            gameOverPanel: null,
            gamePlayingPanel: null,
            gameStartPanel: null,
            initialRepeatRate: 0,
            minRepeatRate: 0,
            rateDecreaseInterval: 0,
            rateDecreaseAmount: 0,
            currentRepeatRate: 0,
            timeSinceStart: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.scorePer = 0.2;
                this.FPS60 = false;
                this.score = 0;
                this.coin = 0;
                this.gameOver = false;
                this.gameStart = true;
                this.gamePlaying = false;
                this.doubleScore = 0;
                this.magent = false;
                this.shield = false;
                this.initialRepeatRate = 1.0;
                this.minRepeatRate = 0.5;
                this.rateDecreaseInterval = 20.0;
                this.rateDecreaseAmount = 0.1;
                this.timeSinceStart = 0.0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null)) {
                    GameManager.Instance = this;
                    this.transform.SetParent(null);
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                    if (this.FPS60) {
                        UnityEngine.Application.targetFrameRate = 60;
                    }
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.UpdateGameState(GameState.Start);
            },
            /*GameManager.Start end.*/

            /*GameManager.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "GameManager#FixedUpdate", this ); }

                if (this.gamePlaying) {
                    this.timeSinceStart += UnityEngine.Time.fixedDeltaTime;
                    if (this.timeSinceStart >= this.rateDecreaseInterval) {
                        this.currentRepeatRate = UnityEngine.Mathf.Max(this.minRepeatRate, this.currentRepeatRate - this.rateDecreaseAmount);
                        this.timeSinceStart = 0.0;
                    }
                }
            },
            /*GameManager.FixedUpdate end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    UnityEngine.Camera.main.fieldOfView = 40.0;
                } else {
                    UnityEngine.Camera.main.fieldOfView = 90.0;
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.UpdateGameState start.*/
            UpdateGameState: function (newState) {
if ( TRACE ) { TRACE( "GameManager#UpdateGameState", this ); }

                this.gameState = newState;

                switch (this.gameState) {
                    case GameState.Start: 
                        this.HandleGameStartScreen();
                        break;
                    case GameState.Playing: 
                        this.HandleGamePlayingScreen();
                        break;
                    case GameState.GameOver: 
                        this.HandleGameOverScreen();
                        break;
                }

                this.gameStartPanel.SetActive(this.gameState === GameState.Start);
                this.gamePlayingPanel.SetActive(this.gameState === GameState.Playing);
                this.gameOverPanel.SetActive(this.gameState === GameState.GameOver);

                !Bridge.staticEquals(GameManager.OnGameStateChanged, null) ? GameManager.OnGameStateChanged(newState) : null;
            },
            /*GameManager.UpdateGameState end.*/

            /*GameManager.HandleGameStartScreen start.*/
            HandleGameStartScreen: function () {
if ( TRACE ) { TRACE( "GameManager#HandleGameStartScreen", this ); }

                var $t, $t1, $t2;
                this.score = 0;
                this.coin = 0;
                this.gameOver = false;
                this.gameStart = true;
                this.gamePlaying = false;
                this.currentRepeatRate = this.initialRepeatRate; // Reset repeatRate
                this.timeSinceStart = 0.0;
                this.UpdateScoreUI(this.score);
                this.UpdateCoinUI(this.coin);
                this.UpdateMultipleUI(1);
                this.UpdateActivePowerUpsUI();

                var obstacles = UnityEngine.GameObject.FindGameObjectsWithTag("Obstacle");
                $t = Bridge.getEnumerator(obstacles);
                try {
                    while ($t.moveNext()) {
                        var obstacle = $t.Current;
                        UnityEngine.MonoBehaviour.Destroy(obstacle);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                var coins = UnityEngine.GameObject.FindGameObjectsWithTag("Coin");
                $t1 = Bridge.getEnumerator(coins);
                try {
                    while ($t1.moveNext()) {
                        var coin = $t1.Current;
                        UnityEngine.MonoBehaviour.Destroy(coin);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                var PowerUps = UnityEngine.GameObject.FindGameObjectsWithTag("PowerUp");
                $t2 = Bridge.getEnumerator(PowerUps);
                try {
                    while ($t2.moveNext()) {
                        var PowerUp = $t2.Current;
                        UnityEngine.MonoBehaviour.Destroy(PowerUp);
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.HandleGameStartScreen end.*/

            /*GameManager.HandleGamePlayingScreen start.*/
            HandleGamePlayingScreen: function () {
if ( TRACE ) { TRACE( "GameManager#HandleGamePlayingScreen", this ); }

                this.score = 0;
                this.coin = 0;
                this.gameOver = false;
                this.gameStart = false;
                this.gamePlaying = true;
                this.currentRepeatRate = this.initialRepeatRate; // Reset repeatRate
                this.timeSinceStart = 0.0;
                this.UpdateScoreUI(this.score);
                this.UpdateCoinUI(this.coin);
                this.UpdateMultipleUI(1);
                this.UpdateActivePowerUpsUI();
                this.StartCoroutine$1(this.IncreaseScoreOverTime(this.scorePer));
            },
            /*GameManager.HandleGamePlayingScreen end.*/

            /*GameManager.HandleGameOverScreen start.*/
            HandleGameOverScreen: function () {
if ( TRACE ) { TRACE( "GameManager#HandleGameOverScreen", this ); }

                this.gamePlaying = false;
                this.gameOver = true;
            },
            /*GameManager.HandleGameOverScreen end.*/

            /*GameManager.HandleRestartGame start.*/
            HandleRestartGame: function () {
if ( TRACE ) { TRACE( "GameManager#HandleRestartGame", this ); }

                var $t, $t1, $t2;
                this.score = 0;
                this.coin = 0;
                this.gameOver = false;
                this.gameStart = false;
                this.gamePlaying = true;
                this.shield = false;
                this.doubleScore = 0;
                this.magent = false;
                this.currentRepeatRate = this.initialRepeatRate;
                this.timeSinceStart = 0.0;

                this.UpdateScoreUI(0);
                this.UpdateCoinUI(0);
                this.UpdateMultipleUI(1);
                this.UpdateActivePowerUpsUI();
                var obstacles = UnityEngine.GameObject.FindGameObjectsWithTag("Obstacle");
                $t = Bridge.getEnumerator(obstacles);
                try {
                    while ($t.moveNext()) {
                        var obstacle = $t.Current;
                        UnityEngine.MonoBehaviour.Destroy(obstacle);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                var coins = UnityEngine.GameObject.FindGameObjectsWithTag("Coin");
                $t1 = Bridge.getEnumerator(coins);
                try {
                    while ($t1.moveNext()) {
                        var coin = $t1.Current;
                        UnityEngine.MonoBehaviour.Destroy(coin);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }

                var PowerUps = UnityEngine.GameObject.FindGameObjectsWithTag("PowerUp");
                $t2 = Bridge.getEnumerator(PowerUps);
                try {
                    while ($t2.moveNext()) {
                        var PowerUp = $t2.Current;
                        UnityEngine.MonoBehaviour.Destroy(PowerUp);
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }

                this.UpdateGameState(GameState.Playing);
            },
            /*GameManager.HandleRestartGame end.*/

            /*GameManager.IncreaseScoreOverTime start.*/
            IncreaseScoreOverTime: function (repeatRate) {
if ( TRACE ) { TRACE( "GameManager#IncreaseScoreOverTime", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( !this.gameOver ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(repeatRate);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.UpdateScore(1, 1);

                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.IncreaseScoreOverTime end.*/

            /*GameManager.GetCurrentRepeatRate start.*/
            GetCurrentRepeatRate: function () {
if ( TRACE ) { TRACE( "GameManager#GetCurrentRepeatRate", this ); }

                return this.currentRepeatRate;
            },
            /*GameManager.GetCurrentRepeatRate end.*/

            /*GameManager.UpdateScore start.*/
            UpdateScore: function (scoreToAdd, multiple) {
if ( TRACE ) { TRACE( "GameManager#UpdateScore", this ); }

                if (!this.gameOver) {
                    var finalMultiple = multiple;

                    if (this.doubleScore > 0) {
                        finalMultiple = Bridge.Int.mul(finalMultiple, Bridge.Int.clip32(Math.pow(2, this.doubleScore)));
                    }

                    this.score = (this.score + (Bridge.Int.mul(scoreToAdd, finalMultiple))) | 0;
                    this.UpdateScoreUI(this.score);
                }
            },
            /*GameManager.UpdateScore end.*/

            /*GameManager.ActivateDoubleScore start.*/
            ActivateDoubleScore: function () {
if ( TRACE ) { TRACE( "GameManager#ActivateDoubleScore", this ); }

                if (!this.gameOver) {
                    this.doubleScore = (this.doubleScore + 1) | 0;
                    this.UpdateMultiple();
                    this.StartCoroutine$1(this.DoubleScoreDuration());
                    this.UpdateActivePowerUpsUI();
                }
            },
            /*GameManager.ActivateDoubleScore end.*/

            /*GameManager.UpdateMultiple start.*/
            UpdateMultiple: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateMultiple", this ); }

                var multiple = Bridge.Int.clip32(Math.pow(2, this.doubleScore));
                this.UpdateMultipleUI(multiple);
            },
            /*GameManager.UpdateMultiple end.*/

            /*GameManager.DoubleScoreDuration start.*/
            DoubleScoreDuration: function () {
if ( TRACE ) { TRACE( "GameManager#DoubleScoreDuration", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(5.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.doubleScore = (this.doubleScore - 1) | 0;
                                        this.UpdateMultiple();
                                        this.UpdateActivePowerUpsUI();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.DoubleScoreDuration end.*/

            /*GameManager.ActivateMagnet start.*/
            ActivateMagnet: function () {
if ( TRACE ) { TRACE( "GameManager#ActivateMagnet", this ); }

                if (!this.gameOver) {
                    this.magent = true;
                    this.StartCoroutine$1(this.MagnetDuration());
                    this.UpdateActivePowerUpsUI();
                }
            },
            /*GameManager.ActivateMagnet end.*/

            /*GameManager.MagnetDuration start.*/
            MagnetDuration: function () {
if ( TRACE ) { TRACE( "GameManager#MagnetDuration", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(5.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.magent = false;
                                        this.UpdateActivePowerUpsUI();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.MagnetDuration end.*/

            /*GameManager.IsMagnetActive start.*/
            IsMagnetActive: function () {
if ( TRACE ) { TRACE( "GameManager#IsMagnetActive", this ); }

                return this.magent;
            },
            /*GameManager.IsMagnetActive end.*/

            /*GameManager.UpdateCoin start.*/
            UpdateCoin: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateCoin", this ); }

                if (!this.gameOver) {
                    this.coin = (this.coin + 1) | 0;
                    this.UpdateCoinUI(this.coin);
                }
            },
            /*GameManager.UpdateCoin end.*/

            /*GameManager.IsGameOver start.*/
            IsGameOver: function () {
if ( TRACE ) { TRACE( "GameManager#IsGameOver", this ); }

                return this.gameOver;
            },
            /*GameManager.IsGameOver end.*/

            /*GameManager.IsGameStart start.*/
            IsGameStart: function () {
if ( TRACE ) { TRACE( "GameManager#IsGameStart", this ); }

                return this.gameStart;
            },
            /*GameManager.IsGameStart end.*/

            /*GameManager.IsGamePlaying start.*/
            IsGamePlaying: function () {
if ( TRACE ) { TRACE( "GameManager#IsGamePlaying", this ); }

                return this.gamePlaying;
            },
            /*GameManager.IsGamePlaying end.*/

            /*GameManager.IsShieldActive start.*/
            IsShieldActive: function () {
if ( TRACE ) { TRACE( "GameManager#IsShieldActive", this ); }

                return this.shield;
            },
            /*GameManager.IsShieldActive end.*/

            /*GameManager.EnableShield start.*/
            EnableShield: function () {
if ( TRACE ) { TRACE( "GameManager#EnableShield", this ); }

                this.shield = true;
            },
            /*GameManager.EnableShield end.*/

            /*GameManager.DisableShield start.*/
            DisableShield: function () {
if ( TRACE ) { TRACE( "GameManager#DisableShield", this ); }

                this.shield = false;
            },
            /*GameManager.DisableShield end.*/

            /*GameManager.GetRepeatRate start.*/
            GetRepeatRate: function () {
if ( TRACE ) { TRACE( "GameManager#GetRepeatRate", this ); }

                return this.currentRepeatRate;
            },
            /*GameManager.GetRepeatRate end.*/

            /*GameManager.UpdateScoreUI start.*/
            UpdateScoreUI: function (score) {
if ( TRACE ) { TRACE( "GameManager#UpdateScoreUI", this ); }

                this.scoreText.text = System.Int32.format(score, "000000");
            },
            /*GameManager.UpdateScoreUI end.*/

            /*GameManager.UpdateCoinUI start.*/
            UpdateCoinUI: function (coin) {
if ( TRACE ) { TRACE( "GameManager#UpdateCoinUI", this ); }

                this.coinText.text = "$" + coin;
            },
            /*GameManager.UpdateCoinUI end.*/

            /*GameManager.UpdateMultipleUI start.*/
            UpdateMultipleUI: function (multiple) {
if ( TRACE ) { TRACE( "GameManager#UpdateMultipleUI", this ); }

                this.multipleText.text = "x" + multiple;
            },
            /*GameManager.UpdateMultipleUI end.*/

            /*GameManager.UpdateActivePowerUpsUI start.*/
            UpdateActivePowerUpsUI: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateActivePowerUpsUI", this ); }

                var activePowerUps = "";
                if (this.doubleScore > 0) {
                    activePowerUps = (activePowerUps || "") + "X2\n";
                }

                if (this.magent) {
                    activePowerUps = (activePowerUps || "") + "Magnet\n";
                }

                if (this.shield) {
                    activePowerUps = (activePowerUps || "") + "Shield\n";
                }
                this.activePowerUpsText.text = activePowerUps;
            },
            /*GameManager.UpdateActivePowerUpsUI end.*/

            /*GameManager.StartButtonPressed start.*/
            StartButtonPressed: function () {
if ( TRACE ) { TRACE( "GameManager#StartButtonPressed", this ); }

                this.UpdateGameState(GameState.Playing);
            },
            /*GameManager.StartButtonPressed end.*/

            /*GameManager.RestartButtonPressed start.*/
            RestartButtonPressed: function () {
if ( TRACE ) { TRACE( "GameManager#RestartButtonPressed", this ); }

                this.HandleRestartGame();
            },
            /*GameManager.RestartButtonPressed end.*/

            /*GameManager.ReturnToMenuButtonPressed start.*/
            ReturnToMenuButtonPressed: function () {
if ( TRACE ) { TRACE( "GameManager#ReturnToMenuButtonPressed", this ); }

                this.UpdateGameState(GameState.Start);
            },
            /*GameManager.ReturnToMenuButtonPressed end.*/

            /*GameManager.ExitButtonPressed start.*/
            ExitButtonPressed: function () {
if ( TRACE ) { TRACE( "GameManager#ExitButtonPressed", this ); }

                //UnityEditor.EditorApplication.isPlaying = false;
                UnityEngine.Application.Quit();
            },
            /*GameManager.ExitButtonPressed end.*/


        }
    });
    /*GameManager end.*/

    /*GameState start.*/
    Bridge.define("GameState", {
        $kind: 6,
        statics: {
            fields: {
                Start: 0,
                Playing: 1,
                GameOver: 2
            }
        }
    });
    /*GameState end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Magnet start.*/
    Bridge.define("Magnet", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spinSpeed: 0,
            zBound: 0,
            speed: 0,
            magnetDuration: 0,
            MagnetParti: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Magnet#init", this ); }

                this.spinSpeed = 180.0;
                this.zBound = -35;
                this.speed = 20.0;
                this.magnetDuration = 5.0;
            }
        },
        methods: {
            /*Magnet.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Magnet#Start", this ); }

                this.MagnetParti = this.GetComponentInChildren(UnityEngine.ParticleSystem);
            },
            /*Magnet.Start end.*/

            /*Magnet.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "Magnet#FixedUpdate", this ); }

                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.Move();
                this.DestroyOutBound();
            },
            /*Magnet.FixedUpdate end.*/

            /*Magnet.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "Magnet#Move", this ); }

                this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.fixedDeltaTime ) );
            },
            /*Magnet.Move end.*/

            /*Magnet.DestroyOutBound start.*/
            DestroyOutBound: function () {
if ( TRACE ) { TRACE( "Magnet#DestroyOutBound", this ); }

                if (this.transform.position.z < this.zBound) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*Magnet.DestroyOutBound end.*/

            /*Magnet.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Magnet#OnTriggerEnter", this ); }

                if (other.CompareTag("Player")) {
                    GameManager.Instance.ActivateMagnet();
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*Magnet.OnTriggerEnter end.*/


        }
    });
    /*Magnet end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            jumpForce: 0,
            xLeftRail: 0,
            xRightRail: 0,
            xMiddleRail: 0,
            gravityModifier: 0,
            dirtParti: null,
            currentPos: 0,
            rollDuration: 0,
            rollTimer: 0,
            isOnGround: false,
            isRolling: false,
            isFreeze: false,
            minSwipeDistance: 0,
            maxSwipeTime: 0,
            swipeStartPosition: null,
            swipeStartTime: 0,
            playerRb: null,
            playerAnim: null,
            playerCol: null,
            audioSource: null,
            jumpSound: null,
            rollSound: null,
            deathSound: null,
            startPos: null,
            endPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.swipeStartPosition = new UnityEngine.Vector2();
                this.startPos = new UnityEngine.Vector2();
                this.endPos = new UnityEngine.Vector2();
                this.speed = 1.0;
                this.jumpForce = 20.0;
                this.xLeftRail = -5.0;
                this.xRightRail = 5.0;
                this.xMiddleRail = 0.0;
                this.gravityModifier = -10.0;
                this.currentPos = 0;
                this.rollDuration = 0.3;
                this.rollTimer = 0.0;
                this.isOnGround = true;
                this.isRolling = false;
                this.isFreeze = false;
                this.minSwipeDistance = 100.0;
                this.maxSwipeTime = 0.5;
            }
        },
        methods: {
            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }

                this.playerRb = this.GetComponent(UnityEngine.Rigidbody);
                this.playerAnim = this.GetComponent(UnityEngine.Animator);
                this.playerCol = this.GetComponent(UnityEngine.BoxCollider);
                this.audioSource = this.GetComponent(UnityEngine.AudioSource);
                UnityEngine.Physics.gravity = UnityEngine.Physics.gravity.$clone().clone().scale( this.gravityModifier );
                GameManager.addOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChanged));
            },
            /*PlayerController.Start end.*/

            /*PlayerController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlayerController#OnDestroy", this ); }

                GameManager.removeOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChanged));
            },
            /*PlayerController.OnDestroy end.*/

            /*PlayerController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "PlayerController#FixedUpdate", this ); }

                this.SwitchRail();
            },
            /*PlayerController.FixedUpdate end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }

                if (GameManager.Instance.IsGamePlaying()) {
                    this.PlayerInput();
                }
            },
            /*PlayerController.Update end.*/

            /*PlayerController.HandleGameStateChanged start.*/
            HandleGameStateChanged: function (state) {
if ( TRACE ) { TRACE( "PlayerController#HandleGameStateChanged", this ); }

                if (state === GameState.Playing) {

                    this.currentPos = 0;
                    this.isFreeze = false;
                    this.isOnGround = true;
                    this.isRolling = false;
                    this.playerAnim.SetBool$1("Death_b", false);
                    this.playerAnim.SetBool$1("Roll_b", false);
                    this.playerAnim.SetBool$1("Jump_b", false);
                    this.playerAnim.SetFloat$1("Speed_f", 1.0);
                    this.playerAnim.SetBool$1("Static_b", true);
                    this.dirtParti.Play();
                } else if (state === GameState.GameOver) {
                    this.isFreeze = true;
                    this.playerAnim.SetInteger$1("DeathType_int", 1);
                    this.playerAnim.SetBool$1("Death_b", true);
                    this.playerAnim.SetFloat$1("Speed_f", 0);
                    this.dirtParti.Stop();
                } else if (state === GameState.Start) {
                    this.currentPos = 0;
                    this.isFreeze = false;
                    this.isOnGround = true;
                    this.isRolling = false;
                    this.playerAnim.SetBool$1("Death_b", false);
                    this.playerAnim.SetBool$1("Roll_b", false);
                    this.playerAnim.SetBool$1("Jump_b", false);
                    this.playerAnim.SetFloat$1("Speed_f", 0.3);
                    this.playerAnim.SetBool$1("Static_b", true);
                    this.dirtParti.Stop();
                }
            },
            /*PlayerController.HandleGameStateChanged end.*/

            /*PlayerController.SwitchRail start.*/
            SwitchRail: function () {
if ( TRACE ) { TRACE( "PlayerController#SwitchRail", this ); }

                if (!this.isFreeze) {
                    if (this.currentPos === 0) {
                        this.transform.position = pc.Vec3.moveTowards( this.transform.position, new pc.Vec3( this.xMiddleRail, this.transform.position.y, this.transform.position.z ), this.speed * UnityEngine.Time.deltaTime );
                    } else if (this.currentPos === -1) {
                        this.transform.position = pc.Vec3.moveTowards( this.transform.position, new pc.Vec3( this.xLeftRail, this.transform.position.y, this.transform.position.z ), this.speed * UnityEngine.Time.deltaTime );
                    } else if (this.currentPos === 1) {
                        this.transform.position = pc.Vec3.moveTowards( this.transform.position, new pc.Vec3( this.xRightRail, this.transform.position.y, this.transform.position.z ), this.speed * UnityEngine.Time.deltaTime );
                    }
                }
            },
            /*PlayerController.SwitchRail end.*/

            /*PlayerController.PlayerInput start.*/
            PlayerInput: function () {
if ( TRACE ) { TRACE( "PlayerController#PlayerInput", this ); }

                if (GameManager.Instance.IsGameOver()) {
                    return;
                }

                if (UnityEngine.Input.touchCount === 0) {
                    return;
                }

                var touch = UnityEngine.Input.GetTouch(0);

                switch (touch.phase) {
                    case UnityEngine.TouchPhase.Began: 
                        this.startPos = touch.position.$clone();
                        break;
                    case UnityEngine.TouchPhase.Ended: 
                        this.endPos = touch.position.$clone();
                        this.DetectSwipe();
                        break;
                }

                if (this.isRolling) {
                    this.rollTimer += UnityEngine.Time.deltaTime;
                    if (this.rollTimer >= this.rollDuration) {
                        this.isRolling = false;
                        this.rollTimer = 0.0;
                        this.playerAnim.SetBool$1("Roll_b", false);
                        this.audioSource.PlayOneShot(this.rollSound);
                    }
                }
            },
            /*PlayerController.PlayerInput end.*/

            /*PlayerController.DetectSwipe start.*/
            DetectSwipe: function () {
if ( TRACE ) { TRACE( "PlayerController#DetectSwipe", this ); }

                var delta = this.endPos.$clone().sub( this.startPos );

                if (delta.length() < this.minSwipeDistance) {
                    return;
                }

                if (Math.abs(delta.x) > Math.abs(delta.y)) {
                    if (delta.x > 0) {
                        this.ApplySwipeInput(PlayerController.SwipeDirection.Right);
                    } else {
                        this.ApplySwipeInput(PlayerController.SwipeDirection.Left);
                    }
                } else {
                    if (delta.y > 0) {
                        this.ApplySwipeInput(PlayerController.SwipeDirection.Up);
                    } else {
                        this.ApplySwipeInput(PlayerController.SwipeDirection.Down);
                    }
                }
            },
            /*PlayerController.DetectSwipe end.*/

            /*PlayerController.ApplySwipeInput start.*/
            ApplySwipeInput: function (swipeDirection) {
if ( TRACE ) { TRACE( "PlayerController#ApplySwipeInput", this ); }

                if (swipeDirection === PlayerController.SwipeDirection.Left) {
                    if (this.currentPos === 0) {
                        this.currentPos = -1;
                    } else if (this.currentPos === 1) {
                        this.currentPos = 0;
                    }
                    return;
                }

                if (swipeDirection === PlayerController.SwipeDirection.Right) {
                    if (this.currentPos === 0) {
                        this.currentPos = 1;
                    } else if (this.currentPos === -1) {
                        this.currentPos = 0;
                    }
                    return;
                }

                if (swipeDirection === PlayerController.SwipeDirection.Up && this.isOnGround) {
                    this.playerRb.AddForce$1(pc.Vec3.UP.clone().clone().scale( this.jumpForce ), UnityEngine.ForceMode.Impulse);
                    this.isOnGround = false;
                    this.playerAnim.SetTrigger$1("Jump_trig");
                    this.dirtParti.Stop();
                    this.audioSource.PlayOneShot(this.jumpSound);
                    return;
                }

                if (swipeDirection === PlayerController.SwipeDirection.Down && !this.isRolling) {
                    this.isRolling = true;
                    this.rollTimer = 0.0;
                    this.playerAnim.SetTrigger$1("Roll_trig");
                    this.StartCoroutine$1(this.ReduceColliderHeight(0.35));
                    this.dirtParti.Stop();
                }
            },
            /*PlayerController.ApplySwipeInput end.*/

            /*PlayerController.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "PlayerController#OnCollisionEnter", this ); }

                if (collision.gameObject.CompareTag("Ground")) {
                    this.isOnGround = true;
                    if (!this.isRolling) {
                        this.dirtParti.Play();
                    }
                } else if (collision.gameObject.CompareTag("Obstacle")) {
                    if (!GameManager.Instance.IsShieldActive()) {
                        GameManager.Instance.UpdateGameState(GameState.GameOver);
                    } else {
                        this.StartCoroutine$1(this.StartInvulnerability(0.1));
                    }
                }
            },
            /*PlayerController.OnCollisionEnter end.*/

            /*PlayerController.StartInvulnerability start.*/
            StartInvulnerability: function (duration) {
if ( TRACE ) { TRACE( "PlayerController#StartInvulnerability", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(duration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    GameManager.Instance.DisableShield();
                                        GameManager.Instance.UpdateActivePowerUpsUI();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayerController.StartInvulnerability end.*/

            /*PlayerController.ReduceColliderHeight start.*/
            ReduceColliderHeight: function (duration) {
if ( TRACE ) { TRACE( "PlayerController#ReduceColliderHeight", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.playerCol.center = new pc.Vec3( 0, 0.8, 0 );
                                        this.playerCol.size = new pc.Vec3( 1.2, 1.5, 1 );
                                        $enumerator.current = new UnityEngine.WaitForSeconds(duration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.playerCol.center = new pc.Vec3( 0, 1.5, 0 );
                                        this.playerCol.size = new pc.Vec3( 1.2, 3.0, 1 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayerController.ReduceColliderHeight end.*/


        }
    });
    /*PlayerController end.*/

    /*PlayerController+SwipeDirection start.*/
    Bridge.define("PlayerController.SwipeDirection", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Left: 1,
                Right: 2,
                Up: 3,
                Down: 4
            }
        }
    });
    /*PlayerController+SwipeDirection end.*/

    /*RoadScript start.*/
    Bridge.define("RoadScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            zBound: 0,
            speed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RoadScript#init", this ); }

                this.zBound = -15;
                this.speed = 20.0;
            }
        },
        methods: {
            /*RoadScript.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RoadScript#Update", this ); }

                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.Move();
                this.RepeatOutBound();
            },
            /*RoadScript.Update end.*/

            /*RoadScript.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "RoadScript#Move", this ); }

                if (!GameManager.Instance.IsGameStart()) {
                    if (GameManager.Instance.FPS60) {
                        this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.fixedDeltaTime ) );
                    } else {
                        this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.deltaTime ) );
                    }
                }
            },
            /*RoadScript.Move end.*/

            /*RoadScript.RepeatOutBound start.*/
            RepeatOutBound: function () {
if ( TRACE ) { TRACE( "RoadScript#RepeatOutBound", this ); }

                if (this.transform.position.z < this.zBound) {
                    this.transform.position = new pc.Vec3( 10, 0, 0 );
                }
            },
            /*RoadScript.RepeatOutBound end.*/


        }
    });
    /*RoadScript end.*/

    /*ShieldScript start.*/
    Bridge.define("ShieldScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spinSpeed: 0,
            zBound: 0,
            speed: 0,
            ShieldParti: null,
            particleDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ShieldScript#init", this ); }

                this.spinSpeed = 180.0;
                this.zBound = -35;
                this.speed = 20.0;
                this.particleDuration = 0.2;
            }
        },
        methods: {
            /*ShieldScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ShieldScript#Start", this ); }

                this.ShieldParti = this.GetComponentInChildren(UnityEngine.ParticleSystem);
            },
            /*ShieldScript.Start end.*/

            /*ShieldScript.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "ShieldScript#FixedUpdate", this ); }

                this.SpinAround();
                if (GameManager.Instance.IsGameOver()) {
                    return;
                }
                this.Move();
                this.DestroyOutBound();
            },
            /*ShieldScript.FixedUpdate end.*/

            /*ShieldScript.SpinAround start.*/
            SpinAround: function () {
if ( TRACE ) { TRACE( "ShieldScript#SpinAround", this ); }

                this.transform.Rotate(0, 0, this.spinSpeed * UnityEngine.Time.fixedDeltaTime, UnityEngine.Space.Self);
            },
            /*ShieldScript.SpinAround end.*/

            /*ShieldScript.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "ShieldScript#Move", this ); }

                this.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, 0, -this.speed * UnityEngine.Time.fixedDeltaTime ) );
            },
            /*ShieldScript.Move end.*/

            /*ShieldScript.DestroyOutBound start.*/
            DestroyOutBound: function () {
if ( TRACE ) { TRACE( "ShieldScript#DestroyOutBound", this ); }

                if (this.transform.position.z < this.zBound) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*ShieldScript.DestroyOutBound end.*/

            /*ShieldScript.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "ShieldScript#OnTriggerEnter", this ); }

                if (other.CompareTag("Player")) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    GameManager.Instance.EnableShield();
                    GameManager.Instance.UpdateActivePowerUpsUI();
                }
            },
            /*ShieldScript.OnTriggerEnter end.*/


        }
    });
    /*ShieldScript end.*/

    /*SpawnManager start.*/
    Bridge.define("SpawnManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            obstaclePrefabs: null,
            coinPrefabs: null,
            powerUpPrefabs: null,
            startDelay: 0,
            coinSpacing: 0,
            spawnZPosition: 0,
            xSpawnPos: null,
            minCoinCount: 0,
            maxCoinCount: 0,
            spawnCoroutine: null,
            repeatRate: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpawnManager#init", this ); }

                this.startDelay = 1.0;
                this.coinSpacing = 2.0;
                this.spawnZPosition = 40.0;
                this.xSpawnPos = System.Array.init([
                    -5.0, 
                    0.0, 
                    5.0
                ], System.Single);
                this.minCoinCount = 3;
                this.maxCoinCount = 6;
                this.repeatRate = 1.0;
            }
        },
        methods: {
            /*SpawnManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SpawnManager#Awake", this ); }

                this.transform.SetParent(null);
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*SpawnManager.Awake end.*/

            /*SpawnManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SpawnManager#Start", this ); }

                GameManager.addOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChanged));
                this.repeatRate = GameManager.Instance.initialRepeatRate;
            },
            /*SpawnManager.Start end.*/

            /*SpawnManager.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "SpawnManager#FixedUpdate", this ); }

                this.repeatRate = GameManager.Instance.GetRepeatRate();
            },
            /*SpawnManager.FixedUpdate end.*/

            /*SpawnManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "SpawnManager#OnDestroy", this ); }

                GameManager.removeOnGameStateChanged(Bridge.fn.cacheBind(this, this.HandleGameStateChanged));
            },
            /*SpawnManager.OnDestroy end.*/

            /*SpawnManager.HandleGameStateChanged start.*/
            HandleGameStateChanged: function (state) {
if ( TRACE ) { TRACE( "SpawnManager#HandleGameStateChanged", this ); }

                if (state === GameState.Playing) {
                    if (this.spawnCoroutine == null) {
                        this.spawnCoroutine = this.StartCoroutine$1(this.SpawnObjectsCoroutine());
                    }
                } else {
                    if (this.spawnCoroutine != null) {
                        this.StopCoroutine$2(this.spawnCoroutine);
                        this.spawnCoroutine = null;
                    }
                }
            },
            /*SpawnManager.HandleGameStateChanged end.*/

            /*SpawnManager.SpawnObjectsCoroutine start.*/
            SpawnObjectsCoroutine: function () {
if ( TRACE ) { TRACE( "SpawnManager#SpawnObjectsCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.startDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    if (GameManager.Instance.gameState === GameState.Playing) {
                                            this.SpawnObstaclesAndCoins();
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.repeatRate);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpawnManager.SpawnObjectsCoroutine end.*/

            /*SpawnManager.SpawnObstaclesAndCoins start.*/
            SpawnObstaclesAndCoins: function () {
if ( TRACE ) { TRACE( "SpawnManager#SpawnObstaclesAndCoins", this ); }

                var maxObstacles = (this.xSpawnPos.length - 1) | 0;
                var obstacleCount = UnityEngine.Random.Range(0, ((maxObstacles + 1) | 0));
                var railBlocked = System.Array.init(this.xSpawnPos.length, false, System.Boolean);

                for (var i = 0; i < obstacleCount; i = (i + 1) | 0) {
                    var railIndex;
                    do {
                        railIndex = UnityEngine.Random.Range(0, this.xSpawnPos.length);
                    } while (railBlocked[railIndex]);
                    railBlocked[railIndex] = true;
                    this.SpawnObstacle(railIndex);
                }

                var unblockedRailCount = 0;
                var unblockedRails = System.Array.init(this.xSpawnPos.length, 0, System.Int32);
                for (var i1 = 0; i1 < railBlocked.length; i1 = (i1 + 1) | 0) {
                    if (!railBlocked[i1]) {
                        unblockedRails[unblockedRailCount] = i1;
                        unblockedRailCount = (unblockedRailCount + 1) | 0;
                    }
                }

                if (unblockedRailCount > 0) {
                    var coinRailIndex = unblockedRails[UnityEngine.Random.Range(0, unblockedRailCount)];
                    this.SpawnCoinRow(coinRailIndex);
                }

                var powerUpRailIndex = UnityEngine.Random.Range(0, this.xSpawnPos.length);
                var spawnChance = 0.1;
                if (UnityEngine.Random.value < spawnChance) {
                    while (railBlocked[powerUpRailIndex]) {

                        powerUpRailIndex = UnityEngine.Random.Range(0, this.xSpawnPos.length);
                    }
                    this.SpawnPowerUp(powerUpRailIndex);
                }

            },
            /*SpawnManager.SpawnObstaclesAndCoins end.*/

            /*SpawnManager.SpawnObstacle start.*/
            SpawnObstacle: function (railIndex) {
if ( TRACE ) { TRACE( "SpawnManager#SpawnObstacle", this ); }

                var obstacleType = UnityEngine.Random.Range(0, this.obstaclePrefabs.length);
                var xPos = this.xSpawnPos[railIndex];
                var spawnPos = new pc.Vec3( xPos, 0.0, this.spawnZPosition );
                UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.obstaclePrefabs[obstacleType], spawnPos, this.obstaclePrefabs[obstacleType].transform.rotation);
            },
            /*SpawnManager.SpawnObstacle end.*/

            /*SpawnManager.SpawnPowerUp start.*/
            SpawnPowerUp: function (railIdex) {
if ( TRACE ) { TRACE( "SpawnManager#SpawnPowerUp", this ); }

                var powerUpType = UnityEngine.Random.Range(0, this.powerUpPrefabs.length);
                var xPos = this.xSpawnPos[railIdex];
                var spawnPos = new pc.Vec3( xPos, 1.0, this.spawnZPosition );
                UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.powerUpPrefabs[powerUpType], spawnPos, this.powerUpPrefabs[powerUpType].transform.rotation);
            },
            /*SpawnManager.SpawnPowerUp end.*/

            /*SpawnManager.SpawnCoinRow start.*/
            SpawnCoinRow: function (railIndex) {
if ( TRACE ) { TRACE( "SpawnManager#SpawnCoinRow", this ); }

                var xPos = this.xSpawnPos[railIndex];
                var zPos = this.spawnZPosition;
                var coinCount = UnityEngine.Random.Range(this.minCoinCount, ((this.maxCoinCount + 1) | 0));

                for (var i = 0; i < coinCount; i = (i + 1) | 0) {
                    var coinType = UnityEngine.Random.Range(0, this.coinPrefabs.length);
                    var spawnPosition = new pc.Vec3( xPos, 1.5, zPos );
                    UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.coinPrefabs[coinType], spawnPosition, this.coinPrefabs[coinType].transform.rotation);
                    zPos += this.coinSpacing;
                }
            },
            /*SpawnManager.SpawnCoinRow end.*/


        }
    });
    /*SpawnManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","TMPro"];

    /*CoinScript start.*/
    $m("CoinScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyOutBound","t":8,"sn":"DestroyOutBound","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"SpinAround","t":8,"sn":"SpinAround","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"coinMove","t":8,"sn":"coinMove","rt":$n[0].Void},{"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Particle settings")],"a":2,"n":"particleDuration","t":4,"rt":$n[0].Single,"sn":"particleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"playerTransform","t":4,"rt":$n[1].Transform,"sn":"playerTransform"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Coin settings")],"a":2,"n":"spinSpeed","t":4,"rt":$n[0].Single,"sn":"spinSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zBound","t":4,"rt":$n[0].Single,"sn":"zBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CoinScript end.*/

    /*DoubleScore start.*/
    $m("DoubleScore", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyOutBound","t":8,"sn":"DestroyOutBound","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"SpinAround","t":8,"sn":"SpinAround","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Particle settings")],"a":1,"n":"DoubleScoreParti","t":4,"rt":$n[1].ParticleSystem,"sn":"DoubleScoreParti"},{"a":2,"n":"particleDuration","t":4,"rt":$n[0].Single,"sn":"particleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("DoubleScore settings")],"a":2,"n":"spinSpeed","t":4,"rt":$n[0].Single,"sn":"spinSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zBound","t":4,"rt":$n[0].Single,"sn":"zBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DoubleScore end.*/

    /*FenceScript start.*/
    $m("FenceScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyOutBound","t":8,"sn":"DestroyOutBound","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zBound","t":4,"rt":$n[0].Single,"sn":"zBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FenceScript end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateDoubleScore","t":8,"sn":"ActivateDoubleScore","rt":$n[0].Void},{"a":2,"n":"ActivateMagnet","t":8,"sn":"ActivateMagnet","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DisableShield","t":8,"sn":"DisableShield","rt":$n[0].Void},{"a":1,"n":"DoubleScoreDuration","t":8,"sn":"DoubleScoreDuration","rt":$n[2].IEnumerator},{"a":2,"n":"EnableShield","t":8,"sn":"EnableShield","rt":$n[0].Void},{"a":2,"n":"ExitButtonPressed","t":8,"sn":"ExitButtonPressed","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"GetCurrentRepeatRate","t":8,"sn":"GetCurrentRepeatRate","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetRepeatRate","t":8,"sn":"GetRepeatRate","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"HandleGameOverScreen","t":8,"sn":"HandleGameOverScreen","rt":$n[0].Void},{"a":1,"n":"HandleGamePlayingScreen","t":8,"sn":"HandleGamePlayingScreen","rt":$n[0].Void},{"a":1,"n":"HandleGameStartScreen","t":8,"sn":"HandleGameStartScreen","rt":$n[0].Void},{"a":2,"n":"HandleRestartGame","t":8,"sn":"HandleRestartGame","rt":$n[0].Void},{"a":1,"n":"IncreaseScoreOverTime","t":8,"pi":[{"n":"repeatRate","pt":$n[0].Single,"ps":0}],"sn":"IncreaseScoreOverTime","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":2,"n":"IsGameOver","t":8,"sn":"IsGameOver","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsGamePlaying","t":8,"sn":"IsGamePlaying","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsGameStart","t":8,"sn":"IsGameStart","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsMagnetActive","t":8,"sn":"IsMagnetActive","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsShieldActive","t":8,"sn":"IsShieldActive","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MagnetDuration","t":8,"sn":"MagnetDuration","rt":$n[2].IEnumerator},{"a":2,"n":"RestartButtonPressed","t":8,"sn":"RestartButtonPressed","rt":$n[0].Void},{"a":2,"n":"ReturnToMenuButtonPressed","t":8,"sn":"ReturnToMenuButtonPressed","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartButtonPressed","t":8,"sn":"StartButtonPressed","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateActivePowerUpsUI","t":8,"sn":"UpdateActivePowerUpsUI","rt":$n[0].Void},{"a":2,"n":"UpdateCoin","t":8,"sn":"UpdateCoin","rt":$n[0].Void},{"a":1,"n":"UpdateCoinUI","t":8,"pi":[{"n":"coin","pt":$n[0].Int32,"ps":0}],"sn":"UpdateCoinUI","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"UpdateGameState","t":8,"pi":[{"n":"newState","pt":GameState,"ps":0}],"sn":"UpdateGameState","rt":$n[0].Void,"p":[GameState]},{"a":1,"n":"UpdateMultiple","t":8,"sn":"UpdateMultiple","rt":$n[0].Void},{"a":1,"n":"UpdateMultipleUI","t":8,"pi":[{"n":"multiple","pt":$n[0].Int32,"ps":0}],"sn":"UpdateMultipleUI","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"UpdateScore","t":8,"pi":[{"n":"scoreToAdd","pt":$n[0].Int32,"ps":0},{"n":"multiple","pt":$n[0].Int32,"ps":1}],"sn":"UpdateScore","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"UpdateScoreUI","t":8,"pi":[{"n":"score","pt":$n[0].Int32,"ps":0}],"sn":"UpdateScoreUI","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"FPS60","t":4,"rt":$n[0].Boolean,"sn":"FPS60","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":2,"n":"activePowerUpsText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"activePowerUpsText"},{"a":1,"n":"coin","t":4,"rt":$n[0].Int32,"sn":"coin","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"coinText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"coinText"},{"a":1,"n":"currentRepeatRate","t":4,"rt":$n[0].Single,"sn":"currentRepeatRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"doubleScore","t":4,"rt":$n[0].Int32,"sn":"doubleScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"gameOver","t":4,"rt":$n[0].Boolean,"sn":"gameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"gameOverPanel","t":4,"rt":$n[1].GameObject,"sn":"gameOverPanel"},{"a":1,"n":"gamePlaying","t":4,"rt":$n[0].Boolean,"sn":"gamePlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"gamePlayingPanel","t":4,"rt":$n[1].GameObject,"sn":"gamePlayingPanel"},{"a":1,"n":"gameStart","t":4,"rt":$n[0].Boolean,"sn":"gameStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"gameStartPanel","t":4,"rt":$n[1].GameObject,"sn":"gameStartPanel"},{"a":2,"n":"gameState","t":4,"rt":GameState,"sn":"gameState","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"at":[new UnityEngine.HeaderAttribute("Difficulty Settings")],"a":2,"n":"initialRepeatRate","t":4,"rt":$n[0].Single,"sn":"initialRepeatRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"magent","t":4,"rt":$n[0].Boolean,"sn":"magent","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"minRepeatRate","t":4,"rt":$n[0].Single,"sn":"minRepeatRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"multipleText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"multipleText"},{"a":2,"n":"rateDecreaseAmount","t":4,"rt":$n[0].Single,"sn":"rateDecreaseAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rateDecreaseInterval","t":4,"rt":$n[0].Single,"sn":"rateDecreaseInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"score","t":4,"rt":$n[0].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Game Settings")],"a":2,"n":"scorePer","t":4,"rt":$n[0].Single,"sn":"scorePer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("UI Elements")],"a":2,"n":"scoreText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"scoreText"},{"a":1,"n":"shield","t":4,"rt":$n[0].Boolean,"sn":"shield","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"timeSinceStart","t":4,"rt":$n[0].Single,"sn":"timeSinceStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnGameStateChanged","is":true,"t":2,"ad":{"a":2,"n":"add_OnGameStateChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameStateChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameStateChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameStateChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*GameManager end.*/

    /*GameState start.*/
    $m("GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameOver","is":true,"t":4,"rt":GameState,"sn":"GameOver","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Playing","is":true,"t":4,"rt":GameState,"sn":"Playing","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Start","is":true,"t":4,"rt":GameState,"sn":"Start","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameState end.*/

    /*Magnet start.*/
    $m("Magnet", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyOutBound","t":8,"sn":"DestroyOutBound","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"MagnetParti","t":4,"rt":$n[1].ParticleSystem,"sn":"MagnetParti"},{"at":[new UnityEngine.HeaderAttribute("Particle settings")],"a":2,"n":"magnetDuration","t":4,"rt":$n[0].Single,"sn":"magnetDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Magnet settings")],"a":2,"n":"spinSpeed","t":4,"rt":$n[0].Single,"sn":"spinSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zBound","t":4,"rt":$n[0].Single,"sn":"zBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Magnet end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"nested":[PlayerController.SwipeDirection],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplySwipeInput","t":8,"pi":[{"n":"swipeDirection","pt":PlayerController.SwipeDirection,"ps":0}],"sn":"ApplySwipeInput","rt":$n[0].Void,"p":[PlayerController.SwipeDirection]},{"a":1,"n":"DetectSwipe","t":8,"sn":"DetectSwipe","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HandleGameStateChanged","t":8,"pi":[{"n":"state","pt":GameState,"ps":0}],"sn":"HandleGameStateChanged","rt":$n[0].Void,"p":[GameState]},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"PlayerInput","t":8,"sn":"PlayerInput","rt":$n[0].Void},{"a":1,"n":"ReduceColliderHeight","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0}],"sn":"ReduceColliderHeight","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartInvulnerability","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0}],"sn":"StartInvulnerability","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"SwitchRail","t":8,"sn":"SwitchRail","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Audio")],"a":2,"n":"audioSource","t":4,"rt":$n[1].AudioSource,"sn":"audioSource"},{"a":1,"n":"currentPos","t":4,"rt":$n[0].Int32,"sn":"currentPos","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"deathSound","t":4,"rt":$n[1].AudioClip,"sn":"deathSound"},{"at":[new UnityEngine.HeaderAttribute("Effects")],"a":2,"n":"dirtParti","t":4,"rt":$n[1].ParticleSystem,"sn":"dirtParti"},{"a":1,"n":"endPos","t":4,"rt":$n[1].Vector2,"sn":"endPos"},{"a":2,"n":"gravityModifier","t":4,"rt":$n[0].Single,"sn":"gravityModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isFreeze","t":4,"rt":$n[0].Boolean,"sn":"isFreeze","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isOnGround","t":4,"rt":$n[0].Boolean,"sn":"isOnGround","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isRolling","t":4,"rt":$n[0].Boolean,"sn":"isRolling","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"jumpForce","t":4,"rt":$n[0].Single,"sn":"jumpForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"jumpSound","t":4,"rt":$n[1].AudioClip,"sn":"jumpSound"},{"a":2,"n":"maxSwipeTime","t":4,"rt":$n[0].Single,"sn":"maxSwipeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Swipe Input")],"a":2,"n":"minSwipeDistance","t":4,"rt":$n[0].Single,"sn":"minSwipeDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"playerAnim","t":4,"rt":$n[1].Animator,"sn":"playerAnim"},{"a":1,"n":"playerCol","t":4,"rt":$n[1].BoxCollider,"sn":"playerCol"},{"a":1,"n":"playerRb","t":4,"rt":$n[1].Rigidbody,"sn":"playerRb"},{"a":1,"n":"rollDuration","t":4,"rt":$n[0].Single,"sn":"rollDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rollSound","t":4,"rt":$n[1].AudioClip,"sn":"rollSound"},{"a":1,"n":"rollTimer","t":4,"rt":$n[0].Single,"sn":"rollTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Movement")],"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startPos","t":4,"rt":$n[1].Vector2,"sn":"startPos"},{"a":1,"n":"swipeStartPosition","t":4,"rt":$n[1].Vector2,"sn":"swipeStartPosition"},{"a":1,"n":"swipeStartTime","t":4,"rt":$n[0].Single,"sn":"swipeStartTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xLeftRail","t":4,"rt":$n[0].Single,"sn":"xLeftRail","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xMiddleRail","t":4,"rt":$n[0].Single,"sn":"xMiddleRail","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xRightRail","t":4,"rt":$n[0].Single,"sn":"xRightRail","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlayerController end.*/

    /*PlayerController+SwipeDirection start.*/
    $m("PlayerController.SwipeDirection", function () { return {"td":PlayerController,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Down","is":true,"t":4,"rt":PlayerController.SwipeDirection,"sn":"Down","box":function ($v) { return Bridge.box($v, PlayerController.SwipeDirection, System.Enum.toStringFn(PlayerController.SwipeDirection));}},{"a":2,"n":"Left","is":true,"t":4,"rt":PlayerController.SwipeDirection,"sn":"Left","box":function ($v) { return Bridge.box($v, PlayerController.SwipeDirection, System.Enum.toStringFn(PlayerController.SwipeDirection));}},{"a":2,"n":"None","is":true,"t":4,"rt":PlayerController.SwipeDirection,"sn":"None","box":function ($v) { return Bridge.box($v, PlayerController.SwipeDirection, System.Enum.toStringFn(PlayerController.SwipeDirection));}},{"a":2,"n":"Right","is":true,"t":4,"rt":PlayerController.SwipeDirection,"sn":"Right","box":function ($v) { return Bridge.box($v, PlayerController.SwipeDirection, System.Enum.toStringFn(PlayerController.SwipeDirection));}},{"a":2,"n":"Up","is":true,"t":4,"rt":PlayerController.SwipeDirection,"sn":"Up","box":function ($v) { return Bridge.box($v, PlayerController.SwipeDirection, System.Enum.toStringFn(PlayerController.SwipeDirection));}}]}; }, $n);
    /*PlayerController+SwipeDirection end.*/

    /*RoadScript start.*/
    $m("RoadScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"RepeatOutBound","t":8,"sn":"RepeatOutBound","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zBound","t":4,"rt":$n[0].Single,"sn":"zBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RoadScript end.*/

    /*ShieldScript start.*/
    $m("ShieldScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyOutBound","t":8,"sn":"DestroyOutBound","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"SpinAround","t":8,"sn":"SpinAround","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Particle settings")],"a":1,"n":"ShieldParti","t":4,"rt":$n[1].ParticleSystem,"sn":"ShieldParti"},{"a":2,"n":"particleDuration","t":4,"rt":$n[0].Single,"sn":"particleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("DoubleScore settings")],"a":2,"n":"spinSpeed","t":4,"rt":$n[0].Single,"sn":"spinSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zBound","t":4,"rt":$n[0].Single,"sn":"zBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ShieldScript end.*/

    /*SpawnManager start.*/
    $m("SpawnManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HandleGameStateChanged","t":8,"pi":[{"n":"state","pt":GameState,"ps":0}],"sn":"HandleGameStateChanged","rt":$n[0].Void,"p":[GameState]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"SpawnCoinRow","t":8,"pi":[{"n":"railIndex","pt":$n[0].Int32,"ps":0}],"sn":"SpawnCoinRow","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"SpawnObjectsCoroutine","t":8,"sn":"SpawnObjectsCoroutine","rt":$n[2].IEnumerator},{"a":1,"n":"SpawnObstacle","t":8,"pi":[{"n":"railIndex","pt":$n[0].Int32,"ps":0}],"sn":"SpawnObstacle","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"SpawnObstaclesAndCoins","t":8,"sn":"SpawnObstaclesAndCoins","rt":$n[0].Void},{"a":1,"n":"SpawnPowerUp","t":8,"pi":[{"n":"railIdex","pt":$n[0].Int32,"ps":0}],"sn":"SpawnPowerUp","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"coinPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"coinPrefabs"},{"a":2,"n":"coinSpacing","t":4,"rt":$n[0].Single,"sn":"coinSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxCoinCount","t":4,"rt":$n[0].Int32,"sn":"maxCoinCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Coin Row Settings")],"a":2,"n":"minCoinCount","t":4,"rt":$n[0].Int32,"sn":"minCoinCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Prefabs")],"a":2,"n":"obstaclePrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"obstaclePrefabs"},{"a":2,"n":"powerUpPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"powerUpPrefabs"},{"a":1,"n":"repeatRate","t":4,"rt":$n[0].Single,"sn":"repeatRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spawnCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"spawnCoroutine"},{"a":2,"n":"spawnZPosition","t":4,"rt":$n[0].Single,"sn":"spawnZPosition","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Spawn Settings")],"a":2,"n":"startDelay","t":4,"rt":$n[0].Single,"sn":"startDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xSpawnPos","t":4,"rt":$n[0].Array.type(System.Single),"sn":"xSpawnPos"}]}; }, $n);
    /*SpawnManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
