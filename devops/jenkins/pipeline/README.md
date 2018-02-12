# Jenkins Pipeline
- Author : [SeolHun](https://github.com/Seolhun/)

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

- Jenkins Global Variables in Pipeline Syntax
    - BRANCH_NAME
        - For a multibranch project, this will be set to the name of the branch being built, for example in case you wish to deploy to production from master but not from feature branches; if corresponding to some kind of change request, the name is generally arbitrary (refer to CHANGE_ID and CHANGE_TARGET).
    - CHANGE_ID
        - For a multibranch project corresponding to some kind of change request, this will be set to the change ID, such as a pull request number, if supported; else unset.
    - CHANGE_URL
        - For a multibranch project corresponding to some kind of change request, this will be set to the change URL, if supported; else unset.
    - CHANGE_TITLE
        - For a multibranch project corresponding to some kind of change request, this will be set to the title of the change, if supported; else unset.
    - CHANGE_AUTHOR
        - For a multibranch project corresponding to some kind of change request, this will be set to the username of the author of the proposed change, if supported; else unset.
    - CHANGE_AUTHOR_DISPLAY_NAME
        - For a multibranch project corresponding to some kind of change request, this will be set to the human name of the author, if supported; else unset.
    - CHANGE_AUTHOR_EMAIL
        - For a multibranch project corresponding to some kind of change request, this will be set to the email address of the author, if supported; else unset.
    - CHANGE_TARGET
        - For a multibranch project corresponding to some kind of change request, this will be set to the target or base branch to which the change could be merged, if supported; else unset.
    - BUILD_NUMBER
        - The current build number, such as "153"
    - BUILD_ID
        - The current build ID, identical to BUILD_NUMBER for builds created in 1.597+, but a YYYY-MM-DD_hh-mm-ss timestamp for older builds
    - BUILD_DISPLAY_NAME
        - The display name of the current build, which is something like "#153" by default.
    - JOB_NAME
        - Name of the project of this build, such as "foo" or "foo/bar".
    - JOB_BASE_NAME
        - Short Name of the project of this build stripping off folder paths, such as "foo" for "bar/foo".
    - BUILD_TAG
        - String of "jenkins-${JOB_NAME}-${BUILD_NUMBER}". All forward slashes (/) in the JOB_NAME are replaced with dashes (-). Convenient to put into a resource file, a jar file, etc for easier identification.
    - EXECUTOR_NUMBER
        - The unique number that identifies the current executor (among executors of the same machine) that’s carrying out this build. This is the number you see in the "build executor status", except that the number starts from 0, not 1.
    - NODE_NAME
        - Name of the agent if the build is on an agent, or "master" if run on master
    - NODE_LABELS
        - Whitespace-separated list of labels that the node is assigned.
    - **WORKSPACE**
        - The absolute path of the directory assigned to the build as a workspace.
    - JENKINS_HOME
        - The absolute path of the directory assigned on the master node for Jenkins to store data.
    - JENKINS_URL
        - Full URL of Jenkins, like http://server:port/jenkins/ (note: only available if Jenkins URL set in system configuration)
    - BUILD_URL
        - Full URL of this build, like http://server:port/jenkins/job/foo/15/ (Jenkins URL must be set)
    - JOB_URL
        - Full URL of this job, like http://server:port/jenkins/job/foo/ (Jenkins URL must be set)

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
