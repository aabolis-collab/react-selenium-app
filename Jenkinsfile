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
                    Start-Process -FilePath "npm" -ArgumentList "start" -NoNewWindow
                    Start-Sleep -Seconds 25
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