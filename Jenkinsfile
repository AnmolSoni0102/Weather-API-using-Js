pipeline {
    agent any
    environment {
        staging_server = "51.20.98.108"
    }
    stages {
        stage('Deploy to Remote') {
            steps {
    sh 'C:\\path\\to\\scp.exe -r ${WORKSPACE}/* root@${staging_server}:C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\weather-2\\'
}
        }
    }
}
