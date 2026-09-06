pipeline {
    agent any

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