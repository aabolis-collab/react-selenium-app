pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
        CI = 'true'
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
                    $env:PORT="3000"
                    Start-Job -ScriptBlock { Set-Location $using:PWD; npm start }
                    Start-Sleep -Seconds 20
                    npm run test:selenium
                '''
            }
        }
    }

    post {
        always {
            powershell '''
                Get-Job | Stop-Job -ErrorAction SilentlyContinue
                Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
            '''
        }
    }
}