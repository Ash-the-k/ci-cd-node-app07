pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Ash-the-k/ci-cd-node-app07.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run App') {
            steps {
                sh 'node app.js'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t ci-node-app07 .'
            }
        }
        
        stage('Build Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name ci-container ci-node-app07'
            }
        }
        
    }
}