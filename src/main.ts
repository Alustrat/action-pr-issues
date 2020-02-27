import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'

async function run(): Promise<void> {
  try {
    const addLabels: string = core.getInput('addlabels')
    const removeLabels: string = core.getInput('removeLabels')

    /* eslint-disable no-console */
    console.log('addLabels:')
    console.log(addLabels)

    console.log('removeLabels:')
    console.log(removeLabels)

    console.log('event name:')
    console.log(github.context.eventName)

    console.log('payload:')
    console.log(github.context.payload)

    if (github.context.eventName === 'pull_request') {
      const prPayload = github.context.payload
        .pull_request as Webhooks.WebhookPayloadPullRequestPullRequest

      console.log('payload2:')
      console.log(prPayload)

      console.log('PR title:')
      console.log(prPayload.title)

      console.log('PR links:')
      console.log(prPayload._links)

      const issueList = prPayload._links.issue
      for (const issue in issueList) {
        console.log('pr issues:')
        console.log(issue)
      }
    }
  } catch (error) {
    core.setFailed(error.message)
  }

  /* eslint-enable no-console */
}

run()
