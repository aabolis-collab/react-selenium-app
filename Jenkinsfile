pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'call "C:\\Program Files\\nodejs\\npm.cmd" install --legacy-peer-deps'
            }
        }

        stage('Start React App & Run Selenium Tests') {
            steps {
                bat '''
                    set BROWSER=none
                    start "ReactApp" /B "C:\\Program Files\\nodejs\\npm.cmd" start
                    timeout /t 20 /nobreak
                    call "C:\\Program Files\\nodejs\\npm.cmd" run test:selenium
                '''
            }
        }
    }

    post {
        always {
            bat 'taskkill /F /IM node.exe /T || exit 0'
        }
    }
}