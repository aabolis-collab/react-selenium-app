pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                powershell 'npm install --legacy-peer-deps'
            }
        }

        stage('Start React App & Run Selenium Tests') {
            steps {
                powershell '''
                    $env:BROWSER="none"
                    Start-Process -FilePath "cmd.exe" -ArgumentList "/c npm start" -NoNewWindow
                    Start-Sleep -Seconds 20
                    npm run test:selenium
                '''
            }
        }
    }

    post {
        always {
            powershell 'Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue'
        }
    }
}