import React from 'react';

import { BottomLinkProps, InfoCard } from '@backstage/core-components';

import { JiraUserIssuesTable } from '../JiraUserIssuesTable/JiraUserIssuesTable';

/**
 * Jira user issues list card properties
 * @public */
export type JiraUserIssuesCardProps = {
  title?: string;
  maxResults?: number;
  bottomLinkProps?: BottomLinkProps;
};

/**
 * Jira user issues list card.
 * @public */
export const JiraUserIssuesCard = ({
  title,
  maxResults,
  bottomLinkProps,
}: JiraUserIssuesCardProps) => {
  return (
    <InfoCard variant="fullHeight" deepLink={bottomLinkProps}>
      <JiraUserIssuesTable
        title={title}
        maxResults={maxResults}
        tableStyle={{
          height: '500px',
          padding: '0px',
          overflowY: 'auto',
          width: '100%',
        }}
      />
    </InfoCard>
  );
};
