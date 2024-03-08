pipeline {
    agent any
    environment {
        staging_server = "51.20.98.108"
    }
    stages {
        stage('Deploy to Remote') {
            steps {
                sh "scp -r C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\weather-pipeline\\* root@${staging_server}:/var/www/html/"
            }
        }
    }
}
