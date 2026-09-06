pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start React App & Run Selenium Tests') {
            steps {
                bat '''
                    start "ReactApp" /B npm start
                    timeout /t 15 /nobreak
                    npm run test:selenium
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