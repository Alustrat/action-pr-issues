import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'

async function run(): Promise<void> {
  try {
    const addLabels: string = core.getInput('addlabels')
    const removeLabels: string = core.getInput('removeLabels')

    // eslint-disable-next-line no-console
    console.log(addLabels)

    // eslint-disable-next-line no-console
    console.log(removeLabels)

    // eslint-disable-next-line no-console
    console.log(github.context.eventName)

    // eslint-disable-next-line no-console
    console.log(github.context.payload)

    if (github.context.eventName === 'pull_request') {
      const prPayload = github.context.payload
        .pull_request as Webhooks.WebhookPayloadPullRequestPullRequest
      
      // eslint-disable-next-line no-console
      console.log(prPayload)
        // eslint-disable-next-line no-console
      console.log(prPayload.title)
      // eslint-disable-next-line no-console
      console.log(prPayload._links)

      const issueList = prPayload._links.issue
      for (const issue in issueList) {
        // eslint-disable-next-line no-console
        console.log(issue)
      }
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
