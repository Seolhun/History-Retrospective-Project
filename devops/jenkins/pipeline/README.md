# Jenkins Pipeline

## Overview
1. Jenkinsfile have to use `Groovy`

## Node, Stage, Step Difference
- stages > stage > node > step (Not absolutly, just abstactly).
- **node** 
	- specifies where something shall happen. You give a name or a label, and Jenkins runs the block there.
- **stage**
	- structures your script into a high-level sequence. Stages show up as columns in the Pipeline Stage view with average stage times and colours for the stage result.
- **step**
	-  step is one way to specify what shall happen. sh is of a similar quality, it is a different kind of action. (You can also use build for things that are already specified as projects.)
> So steps can reside within nodes, (if they don't, they are executed on the master), and nodes and steps can be structured into an overall sequence with stages.

## [Jenkins Git SCM](https://jenkins.io/doc/pipeline/steps/workflow-scm-step/)
#### [Git Environment variables](https://wiki.jenkins.io/display/JENKINS/Git+Plugin)
- The git plugin sets several environment variables you can use in your scripts:
	- GIT_COMMIT 
		- SHA of the current
	- GIT_BRANCH 
		- Name of the remote repository (defaults to origin), followed by name of the branch currently being used, e.g. "origin/master" or "origin/foo"
	- GIT_LOCAL_BRANCH 
		- Name of the branch on Jenkins. When the "checkout to specific local branch" behavior is configured, the variable is published. If the behavior is configured as null or \*\*, the property will contain the resulting local branch name sans the remote name. 
	- GIT_PREVIOUS_COMMIT 
		- SHA of the previous built commit from the same branch (the current SHA on first build in branch)
	- GIT_PREVIOUS_SUCCESSFUL_COMMIT 
		- SHA of the previous successfully built commit from the same branch.
	- GIT_URL 
		- Repository remote URL
	- GIT_URL_N 
		- Repository remote URLs when there are more than 1 remotes, e.g. GIT_URL_1, GIT_URL_2
	- GIT_AUTHOR_NAME and GIT_COMMITTER_NAME 
		- The name entered if the "Custom user name/e-mail address" behaviour is enabled; falls back to the value entered in the Jenkins system config under "Global Config user.name Value" (if any)
	- GIT_AUTHOR_EMAIL and GIT_COMMITTER_EMAIL 
		- The email entered if the "Custom user name/e-mail address" behaviour is enabled; falls back to the value entered in the Jenkins system config under "Global Config user.email Value" (if any)

## Examples
1. Try 5 times for 5 minutes
2. When the Pipeline has finished executing, you may need to run clean-up steps or perform some actions based on the outcome of the Pipeline. These actions can be performed in the post section.
```jenkins
pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                timeout(time: 3, unit: 'MINUTES') {
                    retry(5) {
                        sh './flakey-deploy.sh'
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'This will always run'
            // deleteDir() /* clean up our workspace */
        }
        success {
            echo 'This will run only if successful'
        	slackSend channel: '#ops-room', color: 'good', message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        failure {
            echo 'This will run only if failed'
	        mail to: 'team@example.com', subject: "Failed Pipeline: ${currentBuild.fullDisplayName}", body: "Something is wrong with ${env.BUILD_URL}"
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
```

2. 

## Reference
- [Jenkins Pipeline](https://jenkins.io/doc/book/pipeline/)
