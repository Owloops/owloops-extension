import React, { useEffect } from 'react';
import { IWaterfallEvent, useEventStore } from '../state/store';
import clsx from 'clsx';
import * as HoverCard from '@radix-ui/react-hover-card';
import { startTime as timeOrigin } from '../state/currentTask';

// FOR FRONTEND DEV PURPOSES ONLY
export const sampleEvents: IWaterfallEvent[] = [
  {
    eventInput: 'StartTask',
    eventProperties: {
      instructions: 'Send a "Hello world!" message',
      site: 'app.slack.com',
    },
    start: 0,
    elapsed: 7.200000002980232,
    finished: 7.200000002980232,
  },
  {
    eventInput: 'ProcessDOM',
    eventProperties: {
      actionId: '1747b16b-a26f-4dfd-ae98-578c350b01f4',
    },
    start: 7.200000002980232,
    elapsed: 567.3999999985099,
    finished: 574.6000000014901,
  },
  {
    eventInput: 'DetermineAction',
    eventProperties: {
      actionId: '1747b16b-a26f-4dfd-ae98-578c350b01f4',
      usage: {
        prompt_tokens: 3264,
        completion_tokens: 32,
        total_tokens: 3296,
      },
      prompt:
        'The user requests the following task:\n\nSend a "Hello world!" message\n\n\n\nCurrent time: 6/4/2023, 2:03:22 PM\n\nCurrent page contents:\nT1: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4><span role="presentation" id=$5/></div><div role="presentation" id=$6><span role="presentation" id=$7><button type="button" id=$8>Henry Castillo </button></span><a aria-label=$9 id=$10><span id=$11>$12</span></a>Hello world! </div></div></div></div></div>\nT2: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4/><div role="presentation" id=$5>Hello world! </div></div></div></div></div>\nT3: <div role="treeitem" id=$1><div id=$2><div id=$3/><span aria-label="" id=$4>$5</span><span id=$6/></div></div>\nT4: <div role="treeitem" id=$1><div id=$2><div id=$3><span id=$4/><span id=$5>$6</span></div></div></div>\n\n<html><head/><body><div><div aria-label="Workspace primary actions" role="toolbar" id="44"><button aria-label="Show history" type="button" id="47"/><div><button aria-label="Search" type="button" id="51"><div id="52"/><span id="55">Search Cohort </span></button><button aria-label="Search filters" type="button" id="56"/></div><div><button aria-label="Help" type="button" id="64"/><button aria-label="User menu: Henry Castillo" type="button" id="68"><div id="69"><span id="70"><span id="71"/></span><i aria-label="Active" type="presence-online" title="Active" id="73"/><i aria-label="Active" type="presence-online" title="Active" id="74"/></div></button></div></div><div><div aria-label="Workspace secondary actions" role="toolbar" id="81"><div id="82"><div id="83"><button aria-label="Main menu for Cohort" type="button" id="84"><span id="85">Cohort </span><span id="86"/></button></div></div><button aria-label="New message" type="button" id="89"/></div><div aria-label="Workspace navigation"><div><div role="presentation" id="100"><div role="presentation" id="101"><div role="presentation" id="102"><div role="presentation" id="103"><div aria-label="Channels and direct messages" role="tree" id="104"><div role="treeitem" id="105"><div id="106"><span id="107"/><span id="110">Threads </span></div></div>{T4(111,112,113,114,117,"Mentions & reactions ")}{T4(118,119,120,121,124,"Drafts & sent ")}{T4(125,126,127,128,131,"Slack Connect ")}<div role="treeitem" id="132"><button type="button" id="133"><span id="134"/><span id="137">More </span></button></div><div aria-label="Channels" role="treeitem" id="140"><button type="button" id="146"><span id="147"><div id="148">Channels </div></span></button><div role="group" id="150"/></div>{T3(152,153,154,157,"ai-x-product ",158)}{T3(159,160,161,164,"cohortlabs ",165)}{T3(166,167,168,171,"general ",172)}{T3(173,174,175,178,"glados-ai-agent-analytics ",179)}{T3(180,181,182,185,"growth ",186)}{T3(187,188,189,192,"hello-world ",193)}{T3(194,195,196,199,"intros ",200)}{T3(201,202,203,206,"metrics-matter ",207)}{T3(208,209,210,213,"off-topic ",214)}{T3(215,216,217,220,"plg-clinic ",221)}{T3(222,223,224,227,"sponsor-new-relic ",228)}<div role="treeitem" id="229"><div id="230"><button type="button" id="231"><div id="232"><span id="234">Add channels </span></div></button></div></div><div aria-label="Direct Messages" role="treeitem" id="235"><button type="button" id="240"><span id="241"><div id="242">Direct messages </div></span></button><div role="group" id="248"/></div><div role="treeitem" id="250"><div id="251"><div id="252"><div id="253"/><span aria-label="" id="257"><span id="258">Slackbot </span></span><span id="259"/></div></div></div><div role="treeitem" id="262"><div id="263"><div id="264"><div id="265"><div id="269"/><i aria-label="Active" type="presence-online" title="Active" id="270"/><i aria-label="Active" type="presence-online" title="Active" id="271"/></div><span aria-label="" id="272"><span id="273">Henry Castillo </span><span id="274">you </span></span><span id="275"/></div></div></div><div role="treeitem" id="278"><div id="279"><div id="280"><div id="281"><div id="285"/><i aria-label="Active" type="presence-online" title="Active" id="286"/><i aria-label="Active" type="presence-online" title="Active" id="287"/></div><span aria-label="" id="288"><span id="289">Arisrei Lim </span></span><span id="290"/></div></div></div><div role="treeitem" id="293"><div id="294"><div id="295"><div id="296"><div id="300"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="301"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="302"/></div><span aria-label="" id="303"><span id="304">Esther Trapadoux </span></span><span id="305"/></div></div></div><div role="treeitem" id="308"><div id="309"><div id="310"><span id="312">Add coworkers </span></div></div></div><div role="treeitem" id="313"><div id="314"><div id="315"><div id="316"><span aria-label="" id="318">Free trial ends today </span></div></div></div></div></div></div></div><div role="presentation" id="321"/></div></div><input type="button" value="Collapse workspace navigation" id="327"/></div><div><div aria-label="Huddle controls" role="toolbar" id="334"><div><button type="button" id="345"><span id="346"><span id="347">hello-world </span></span></button><input aria-label="Huddle in hello-world" type="checkbox" role="button" id="353"/></div></div><div role="status" id="358"/></div></div></div><div aria-label="Channel hello-world" role="group" id="368"><div><div aria-label="Primary view actions" role="toolbar" id="371"><button aria-label="hello-world" type="button" id="374"><div id="375"><span id="376"/><span id="379">hello-world </span><div id="380"/></div></button><button aria-label="View 1 member. Includes you." type="button" id="385"><div id="387"><span id="388"><span id="389"/></span><span id="391">1 </span></div></button></div><div aria-label="Bookmarks" role="toolbar" id="392"><button aria-label="Add a bookmark" type="button" id="400">Add a bookmark </button></div><div role="presentation" id="404"><div role="presentation" id="410"><div role="presentation" id="411"><div role="presentation" id="412"><div role="presentation" id="413"><div aria-label="hello-world (private channel, has draft)" role="list" id="414">Loading history... <div role="presentation" id="416"><div aria-label="Today Press enter to select a date to jump to." role="listitem" id="417"><button aria-label="Jump to date" type="button" id="419">Today <span id="420"/></button></div></div>{T2(423,424,425,428,432)}{T2(439,440,441,444,448)}{T2(455,456,457,460,464)}{T2(471,472,473,476,480)}{T2(487,488,489,492,496)}{T2(503,504,505,508,512)}{T2(519,520,521,524,528)}{T2(535,536,537,540,544)}{T2(551,552,553,556,560)}{T2(567,568,569,572,576)}{T1(583,584,585,588,589,593,595,596,"Today at 12:58:38 PM",597,598,"12:58 PM ")}{T2(606,607,608,611,615)}{T2(622,623,624,627,631)}{T2(638,639,640,643,647)}{T2(654,655,656,659,663)}{T1(670,671,672,675,676,680,682,683,"Today at 1:22:12 PM",684,685,"1:22 PM ")}{T1(693,694,695,698,699,703,705,706,"Today at 1:29:34 PM",707,708,"1:29 PM ")}{T2(716,717,718,721,725)}{T2(732,733,734,737,741)}{T1(748,749,750,753,754,758,760,761,"Today at 1:39:01 PM",762,763,"1:39 PM ")}{T2(771,772,773,776,780)}{T2(787,788,789,792,796)}{T2(803,804,805,808,812)}{T2(819,820,821,824,828)}{T2(835,836,837,840,844)}{T2(851,852,853,856,860)}{T2(867,868,869,872,876)}{T2(883,884,885,888,892)}{T2(899,900,901,904,908)}{T2(915,916,917,920,924)}{T2(931,932,933,936,940)}</div></div></div><div role="presentation" id="947"/></div></div><div><div aria-label="composer" role="group" id="959"><div><div aria-label="Formatting" role="toolbar" id="962"><div><button aria-label="Bold" type="button" role="button" id="966"/><button aria-label="Italic" type="button" role="button" id="969"/><button aria-label="Strikethrough" type="button" role="button" id="972"/><button aria-label="Link" type="button" role="button" id="976"/><button aria-label="Ordered list" type="button" role="button" id="980"/><button aria-label="Bulleted list" type="button" role="button" id="983"/><button aria-label="Blockquote" type="button" role="button" id="987"/><button aria-label="Code" type="button" role="button" id="991"/><button aria-label="Code block" type="button" role="button" id="994"/></div></div><div aria-label="Message to hello-world" role="textbox" id="1003">Hello world! </div><div aria-label="Composer primary actions" role="toolbar" id="1009"><button aria-label="Attachments" type="button" id="1014"/><div><button aria-label="Formatting" type="button" id="1020"/><button aria-label="Emoji" type="button" id="1023"><div id="1024"/></button><button aria-label="Mention someone" type="button" id="1030"/><button aria-label="Record video clip" type="button" id="1034"/><button aria-label="Record audio clip" type="button" id="1037"/><button aria-label="Run shortcut" type="button" id="1041"/></div><span><button aria-label="Send now" type="button" id="1046"/><button aria-label="Schedule for later" type="button" id="1049"/></span></div></div></div><button type="button" id="1056"><b id="1057">Shift + Enter </b> to add a new line </button></div></div></div></div></div><div><div role="alert" id="1090">loading… </div><div role="log" id="1091"/></div></body></html>',
      response:
        '<Thought>I should focus on the message input and set the value to "Hello world!"</Thought>\n<Action>setValue(1003, "Hello world!")</Action>',
      parsedResponse: {
        thought:
          'I should focus on the message input and set the value to "Hello world!"',
        action: 'setValue(1003, "Hello world!")',
        parsedAction: {
          name: 'setValue',
          args: {
            elementId: 1003,
            value: 'Hello world!',
          },
        },
      },
    },
    start: 574.6000000014901,
    elapsed: 6149.70000000298,
    finished: 6724.30000000447,
  },
  {
    eventInput: 'PerformAction',
    eventProperties: {
      actionId: '1747b16b-a26f-4dfd-ae98-578c350b01f4',
      usage: {
        prompt_tokens: 3264,
        completion_tokens: 32,
        total_tokens: 3296,
      },
      prompt:
        'The user requests the following task:\n\nSend a "Hello world!" message\n\n\n\nCurrent time: 6/4/2023, 2:03:22 PM\n\nCurrent page contents:\nT1: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4><span role="presentation" id=$5/></div><div role="presentation" id=$6><span role="presentation" id=$7><button type="button" id=$8>Henry Castillo </button></span><a aria-label=$9 id=$10><span id=$11>$12</span></a>Hello world! </div></div></div></div></div>\nT2: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4/><div role="presentation" id=$5>Hello world! </div></div></div></div></div>\nT3: <div role="treeitem" id=$1><div id=$2><div id=$3/><span aria-label="" id=$4>$5</span><span id=$6/></div></div>\nT4: <div role="treeitem" id=$1><div id=$2><div id=$3><span id=$4/><span id=$5>$6</span></div></div></div>\n\n<html><head/><body><div><div aria-label="Workspace primary actions" role="toolbar" id="44"><button aria-label="Show history" type="button" id="47"/><div><button aria-label="Search" type="button" id="51"><div id="52"/><span id="55">Search Cohort </span></button><button aria-label="Search filters" type="button" id="56"/></div><div><button aria-label="Help" type="button" id="64"/><button aria-label="User menu: Henry Castillo" type="button" id="68"><div id="69"><span id="70"><span id="71"/></span><i aria-label="Active" type="presence-online" title="Active" id="73"/><i aria-label="Active" type="presence-online" title="Active" id="74"/></div></button></div></div><div><div aria-label="Workspace secondary actions" role="toolbar" id="81"><div id="82"><div id="83"><button aria-label="Main menu for Cohort" type="button" id="84"><span id="85">Cohort </span><span id="86"/></button></div></div><button aria-label="New message" type="button" id="89"/></div><div aria-label="Workspace navigation"><div><div role="presentation" id="100"><div role="presentation" id="101"><div role="presentation" id="102"><div role="presentation" id="103"><div aria-label="Channels and direct messages" role="tree" id="104"><div role="treeitem" id="105"><div id="106"><span id="107"/><span id="110">Threads </span></div></div>{T4(111,112,113,114,117,"Mentions & reactions ")}{T4(118,119,120,121,124,"Drafts & sent ")}{T4(125,126,127,128,131,"Slack Connect ")}<div role="treeitem" id="132"><button type="button" id="133"><span id="134"/><span id="137">More </span></button></div><div aria-label="Channels" role="treeitem" id="140"><button type="button" id="146"><span id="147"><div id="148">Channels </div></span></button><div role="group" id="150"/></div>{T3(152,153,154,157,"ai-x-product ",158)}{T3(159,160,161,164,"cohortlabs ",165)}{T3(166,167,168,171,"general ",172)}{T3(173,174,175,178,"glados-ai-agent-analytics ",179)}{T3(180,181,182,185,"growth ",186)}{T3(187,188,189,192,"hello-world ",193)}{T3(194,195,196,199,"intros ",200)}{T3(201,202,203,206,"metrics-matter ",207)}{T3(208,209,210,213,"off-topic ",214)}{T3(215,216,217,220,"plg-clinic ",221)}{T3(222,223,224,227,"sponsor-new-relic ",228)}<div role="treeitem" id="229"><div id="230"><button type="button" id="231"><div id="232"><span id="234">Add channels </span></div></button></div></div><div aria-label="Direct Messages" role="treeitem" id="235"><button type="button" id="240"><span id="241"><div id="242">Direct messages </div></span></button><div role="group" id="248"/></div><div role="treeitem" id="250"><div id="251"><div id="252"><div id="253"/><span aria-label="" id="257"><span id="258">Slackbot </span></span><span id="259"/></div></div></div><div role="treeitem" id="262"><div id="263"><div id="264"><div id="265"><div id="269"/><i aria-label="Active" type="presence-online" title="Active" id="270"/><i aria-label="Active" type="presence-online" title="Active" id="271"/></div><span aria-label="" id="272"><span id="273">Henry Castillo </span><span id="274">you </span></span><span id="275"/></div></div></div><div role="treeitem" id="278"><div id="279"><div id="280"><div id="281"><div id="285"/><i aria-label="Active" type="presence-online" title="Active" id="286"/><i aria-label="Active" type="presence-online" title="Active" id="287"/></div><span aria-label="" id="288"><span id="289">Arisrei Lim </span></span><span id="290"/></div></div></div><div role="treeitem" id="293"><div id="294"><div id="295"><div id="296"><div id="300"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="301"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="302"/></div><span aria-label="" id="303"><span id="304">Esther Trapadoux </span></span><span id="305"/></div></div></div><div role="treeitem" id="308"><div id="309"><div id="310"><span id="312">Add coworkers </span></div></div></div><div role="treeitem" id="313"><div id="314"><div id="315"><div id="316"><span aria-label="" id="318">Free trial ends today </span></div></div></div></div></div></div></div><div role="presentation" id="321"/></div></div><input type="button" value="Collapse workspace navigation" id="327"/></div><div><div aria-label="Huddle controls" role="toolbar" id="334"><div><button type="button" id="345"><span id="346"><span id="347">hello-world </span></span></button><input aria-label="Huddle in hello-world" type="checkbox" role="button" id="353"/></div></div><div role="status" id="358"/></div></div></div><div aria-label="Channel hello-world" role="group" id="368"><div><div aria-label="Primary view actions" role="toolbar" id="371"><button aria-label="hello-world" type="button" id="374"><div id="375"><span id="376"/><span id="379">hello-world </span><div id="380"/></div></button><button aria-label="View 1 member. Includes you." type="button" id="385"><div id="387"><span id="388"><span id="389"/></span><span id="391">1 </span></div></button></div><div aria-label="Bookmarks" role="toolbar" id="392"><button aria-label="Add a bookmark" type="button" id="400">Add a bookmark </button></div><div role="presentation" id="404"><div role="presentation" id="410"><div role="presentation" id="411"><div role="presentation" id="412"><div role="presentation" id="413"><div aria-label="hello-world (private channel, has draft)" role="list" id="414">Loading history... <div role="presentation" id="416"><div aria-label="Today Press enter to select a date to jump to." role="listitem" id="417"><button aria-label="Jump to date" type="button" id="419">Today <span id="420"/></button></div></div>{T2(423,424,425,428,432)}{T2(439,440,441,444,448)}{T2(455,456,457,460,464)}{T2(471,472,473,476,480)}{T2(487,488,489,492,496)}{T2(503,504,505,508,512)}{T2(519,520,521,524,528)}{T2(535,536,537,540,544)}{T2(551,552,553,556,560)}{T2(567,568,569,572,576)}{T1(583,584,585,588,589,593,595,596,"Today at 12:58:38 PM",597,598,"12:58 PM ")}{T2(606,607,608,611,615)}{T2(622,623,624,627,631)}{T2(638,639,640,643,647)}{T2(654,655,656,659,663)}{T1(670,671,672,675,676,680,682,683,"Today at 1:22:12 PM",684,685,"1:22 PM ")}{T1(693,694,695,698,699,703,705,706,"Today at 1:29:34 PM",707,708,"1:29 PM ")}{T2(716,717,718,721,725)}{T2(732,733,734,737,741)}{T1(748,749,750,753,754,758,760,761,"Today at 1:39:01 PM",762,763,"1:39 PM ")}{T2(771,772,773,776,780)}{T2(787,788,789,792,796)}{T2(803,804,805,808,812)}{T2(819,820,821,824,828)}{T2(835,836,837,840,844)}{T2(851,852,853,856,860)}{T2(867,868,869,872,876)}{T2(883,884,885,888,892)}{T2(899,900,901,904,908)}{T2(915,916,917,920,924)}{T2(931,932,933,936,940)}</div></div></div><div role="presentation" id="947"/></div></div><div><div aria-label="composer" role="group" id="959"><div><div aria-label="Formatting" role="toolbar" id="962"><div><button aria-label="Bold" type="button" role="button" id="966"/><button aria-label="Italic" type="button" role="button" id="969"/><button aria-label="Strikethrough" type="button" role="button" id="972"/><button aria-label="Link" type="button" role="button" id="976"/><button aria-label="Ordered list" type="button" role="button" id="980"/><button aria-label="Bulleted list" type="button" role="button" id="983"/><button aria-label="Blockquote" type="button" role="button" id="987"/><button aria-label="Code" type="button" role="button" id="991"/><button aria-label="Code block" type="button" role="button" id="994"/></div></div><div aria-label="Message to hello-world" role="textbox" id="1003">Hello world! </div><div aria-label="Composer primary actions" role="toolbar" id="1009"><button aria-label="Attachments" type="button" id="1014"/><div><button aria-label="Formatting" type="button" id="1020"/><button aria-label="Emoji" type="button" id="1023"><div id="1024"/></button><button aria-label="Mention someone" type="button" id="1030"/><button aria-label="Record video clip" type="button" id="1034"/><button aria-label="Record audio clip" type="button" id="1037"/><button aria-label="Run shortcut" type="button" id="1041"/></div><span><button aria-label="Send now" type="button" id="1046"/><button aria-label="Schedule for later" type="button" id="1049"/></span></div></div></div><button type="button" id="1056"><b id="1057">Shift + Enter </b> to add a new line </button></div></div></div></div></div><div><div role="alert" id="1090">loading… </div><div role="log" id="1091"/></div></body></html>',
      response:
        '<Thought>I should focus on the message input and set the value to "Hello world!"</Thought>\n<Action>setValue(1003, "Hello world!")</Action>',
      parsedResponse: {
        thought:
          'I should focus on the message input and set the value to "Hello world!"',
        action: 'setValue(1003, "Hello world!")',
        parsedAction: {
          name: 'setValue',
          args: {
            elementId: 1003,
            value: 'Hello world!',
          },
        },
      },
    },
    start: 6724.30000000447,
    elapsed: 4838.5,
    finished: 11562.80000000447,
  },
  {
    eventInput: 'FinishAction',
    eventProperties: {
      actionId: '1747b16b-a26f-4dfd-ae98-578c350b01f4',
      action: 'setValue',
    },
    start: 11562.80000000447,
    elapsed: 2049,
    finished: 13611.80000000447,
  },
  {
    eventInput: 'ProcessDOM',
    eventProperties: {
      actionId: 'c4c0ca9a-381f-42b3-aad0-46aa366fb4ef',
    },
    start: 13611.80000000447,
    elapsed: 328.19999999552965,
    finished: 13940,
  },
  {
    eventInput: 'DetermineAction',
    eventProperties: {
      actionId: 'c4c0ca9a-381f-42b3-aad0-46aa366fb4ef',
      usage: {
        prompt_tokens: 3308,
        completion_tokens: 25,
        total_tokens: 3333,
      },
      prompt:
        'The user requests the following task:\n\nSend a "Hello world!" message\n\nYou have already taken the following actions: \n<Thought>I should focus on the message input and set the value to "Hello world!"</Thought>\n<Action>setValue(1003, "Hello world!")</Action>\n\n\n\nCurrent time: 6/4/2023, 2:03:35 PM\n\nCurrent page contents:\nT1: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4><span role="presentation" id=$5/></div><div role="presentation" id=$6><span role="presentation" id=$7><button type="button" id=$8>Henry Castillo </button></span><a aria-label=$9 id=$10><span id=$11>$12</span></a>Hello world! </div></div></div></div></div>\nT2: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4/><div role="presentation" id=$5>Hello world! </div></div></div></div></div>\nT3: <div role="treeitem" id=$1><div id=$2><div id=$3/><span aria-label="" id=$4>$5</span><span id=$6/></div></div>\nT4: <div role="treeitem" id=$1><div id=$2><div id=$3><span id=$4/><span id=$5>$6</span></div></div></div>\n\n<html><head/><body><div><div aria-label="Workspace primary actions" role="toolbar" id="44"><button aria-label="Show history" type="button" id="47"/><div><button aria-label="Search" type="button" id="51"><div id="52"/><span id="55">Search Cohort </span></button><button aria-label="Search filters" type="button" id="56"/></div><div><button aria-label="Help" type="button" id="64"/><button aria-label="User menu: Henry Castillo" type="button" id="68"><div id="69"><span id="70"><span id="71"/></span><i aria-label="Active" type="presence-online" title="Active" id="73"/><i aria-label="Active" type="presence-online" title="Active" id="74"/></div></button></div></div><div><div aria-label="Workspace secondary actions" role="toolbar" id="81"><div id="82"><div id="83"><button aria-label="Main menu for Cohort" type="button" id="84"><span id="85">Cohort </span><span id="86"/></button></div></div><button aria-label="New message" type="button" id="89"/></div><div aria-label="Workspace navigation"><div><div role="presentation" id="100"><div role="presentation" id="101"><div role="presentation" id="102"><div role="presentation" id="103"><div aria-label="Channels and direct messages" role="tree" id="104"><div role="treeitem" id="105"><div id="106"><span id="107"/><span id="110">Threads </span></div></div>{T4(111,112,113,114,117,"Mentions & reactions ")}{T4(118,119,120,121,124,"Drafts & sent ")}{T4(125,126,127,128,131,"Slack Connect ")}<div role="treeitem" id="132"><button type="button" id="133"><span id="134"/><span id="137">More </span></button></div><div aria-label="Channels" role="treeitem" id="140"><button type="button" id="146"><span id="147"><div id="148">Channels </div></span></button><div role="group" id="150"/></div>{T3(152,153,154,157,"ai-x-product ",158)}{T3(159,160,161,164,"cohortlabs ",165)}{T3(166,167,168,171,"general ",172)}{T3(173,174,175,178,"glados-ai-agent-analytics ",179)}{T3(180,181,182,185,"growth ",186)}{T3(187,188,189,192,"hello-world ",193)}{T3(194,195,196,199,"intros ",200)}{T3(201,202,203,206,"metrics-matter ",207)}{T3(208,209,210,213,"off-topic ",214)}{T3(215,216,217,220,"plg-clinic ",221)}{T3(222,223,224,227,"sponsor-new-relic ",228)}<div role="treeitem" id="229"><div id="230"><button type="button" id="231"><div id="232"><span id="234">Add channels </span></div></button></div></div><div aria-label="Direct Messages" role="treeitem" id="235"><button type="button" id="240"><span id="241"><div id="242">Direct messages </div></span></button><div role="group" id="248"/></div><div role="treeitem" id="250"><div id="251"><div id="252"><div id="253"/><span aria-label="" id="257"><span id="258">Slackbot </span></span><span id="259"/></div></div></div><div role="treeitem" id="262"><div id="263"><div id="264"><div id="265"><div id="269"/><i aria-label="Active" type="presence-online" title="Active" id="270"/><i aria-label="Active" type="presence-online" title="Active" id="271"/></div><span aria-label="" id="272"><span id="273">Henry Castillo </span><span id="274">you </span></span><span id="275"/></div></div></div><div role="treeitem" id="278"><div id="279"><div id="280"><div id="281"><div id="285"/><i aria-label="Active" type="presence-online" title="Active" id="286"/><i aria-label="Active" type="presence-online" title="Active" id="287"/></div><span aria-label="" id="288"><span id="289">Arisrei Lim </span></span><span id="290"/></div></div></div><div role="treeitem" id="293"><div id="294"><div id="295"><div id="296"><div id="300"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="301"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="302"/></div><span aria-label="" id="303"><span id="304">Esther Trapadoux </span></span><span id="305"/></div></div></div><div role="treeitem" id="308"><div id="309"><div id="310"><span id="312">Add coworkers </span></div></div></div><div role="treeitem" id="313"><div id="314"><div id="315"><div id="316"><span aria-label="" id="318">Free trial ends today </span></div></div></div></div></div></div></div><div role="presentation" id="321"/></div></div><input type="button" value="Collapse workspace navigation" id="327"/></div><div><div aria-label="Huddle controls" role="toolbar" id="334"><div><button type="button" id="345"><span id="346"><span id="347">hello-world </span></span></button><input aria-label="Huddle in hello-world" type="checkbox" role="button" id="353"/></div></div><div role="status" id="358"/></div></div></div><div aria-label="Channel hello-world" role="group" id="368"><div><div aria-label="Primary view actions" role="toolbar" id="371"><button aria-label="hello-world" type="button" id="374"><div id="375"><span id="376"/><span id="379">hello-world </span><div id="380"/></div></button><button aria-label="View 1 member. Includes you." type="button" id="385"><div id="387"><span id="388"><span id="389"/></span><span id="391">1 </span></div></button></div><div aria-label="Bookmarks" role="toolbar" id="392"><button aria-label="Add a bookmark" type="button" id="400">Add a bookmark </button></div><div role="presentation" id="404"><div role="presentation" id="410"><div role="presentation" id="411"><div role="presentation" id="412"><div role="presentation" id="413"><div aria-label="hello-world (private channel, has draft)" role="list" id="414">Loading history... <div role="presentation" id="416"><div aria-label="Today Press enter to select a date to jump to." role="listitem" id="417"><button aria-label="Jump to date" type="button" id="419">Today <span id="420"/></button></div></div>{T2(423,424,425,428,432)}{T2(439,440,441,444,448)}{T2(455,456,457,460,464)}{T2(471,472,473,476,480)}{T2(487,488,489,492,496)}{T2(503,504,505,508,512)}{T2(519,520,521,524,528)}{T2(535,536,537,540,544)}{T2(551,552,553,556,560)}{T2(567,568,569,572,576)}{T1(583,584,585,588,589,593,595,596,"Today at 12:58:38 PM",597,598,"12:58 PM ")}{T2(606,607,608,611,615)}{T2(622,623,624,627,631)}{T2(638,639,640,643,647)}{T2(654,655,656,659,663)}{T1(670,671,672,675,676,680,682,683,"Today at 1:22:12 PM",684,685,"1:22 PM ")}{T1(693,694,695,698,699,703,705,706,"Today at 1:29:34 PM",707,708,"1:29 PM ")}{T2(716,717,718,721,725)}{T2(732,733,734,737,741)}{T1(748,749,750,753,754,758,760,761,"Today at 1:39:01 PM",762,763,"1:39 PM ")}{T2(771,772,773,776,780)}{T2(787,788,789,792,796)}{T2(803,804,805,808,812)}{T2(819,820,821,824,828)}{T2(835,836,837,840,844)}{T2(851,852,853,856,860)}{T2(867,868,869,872,876)}{T2(883,884,885,888,892)}{T2(899,900,901,904,908)}{T2(915,916,917,920,924)}{T2(931,932,933,936,940)}</div></div></div><div role="presentation" id="947"/></div></div><div><div aria-label="composer" role="group" id="959"><div><div aria-label="Formatting" role="toolbar" id="962"><div><button aria-label="Bold" type="button" role="button" id="966"/><button aria-label="Italic" type="button" role="button" id="969"/><button aria-label="Strikethrough" type="button" role="button" id="972"/><button aria-label="Link" type="button" role="button" id="976"/><button aria-label="Ordered list" type="button" role="button" id="980"/><button aria-label="Bulleted list" type="button" role="button" id="983"/><button aria-label="Blockquote" type="button" role="button" id="987"/><button aria-label="Code" type="button" role="button" id="991"/><button aria-label="Code block" type="button" role="button" id="994"/></div></div><div aria-label="Message to hello-world" role="textbox" id="1003">Hello world! </div><div aria-label="Composer primary actions" role="toolbar" id="1009"><button aria-label="Attachments" type="button" id="1014"/><div><button aria-label="Formatting" type="button" id="1020"/><button aria-label="Emoji" type="button" id="1023"><div id="1024"/></button><button aria-label="Mention someone" type="button" id="1030"/><button aria-label="Record video clip" type="button" id="1034"/><button aria-label="Record audio clip" type="button" id="1037"/><button aria-label="Run shortcut" type="button" id="1041"/></div><span><button aria-label="Send now" type="button" id="1046"/><button aria-label="Schedule for later" type="button" id="1049"/></span></div></div></div><button type="button" id="1056"><b id="1057">Shift + Enter </b> to add a new line </button></div></div></div></div></div><div><div role="alert" id="1090">loading… </div><div role="log" id="1091"/></div></body></html>',
      response:
        '<Thought>I should click the "Send now" button to send the message</Thought>\n<Action>click(1046)</Action>',
      parsedResponse: {
        thought: 'I should click the "Send now" button to send the message',
        action: 'click(1046)',
        parsedAction: {
          name: 'click',
          args: {
            elementId: 1046,
          },
        },
      },
    },
    start: 13940,
    elapsed: 3042.7000000029802,
    finished: 16982.70000000298,
  },
  {
    eventInput: 'PerformAction',
    eventProperties: {
      actionId: 'c4c0ca9a-381f-42b3-aad0-46aa366fb4ef',
      usage: {
        prompt_tokens: 3308,
        completion_tokens: 25,
        total_tokens: 3333,
      },
      prompt:
        'The user requests the following task:\n\nSend a "Hello world!" message\n\nYou have already taken the following actions: \n<Thought>I should focus on the message input and set the value to "Hello world!"</Thought>\n<Action>setValue(1003, "Hello world!")</Action>\n\n\n\nCurrent time: 6/4/2023, 2:03:35 PM\n\nCurrent page contents:\nT1: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4><span role="presentation" id=$5/></div><div role="presentation" id=$6><span role="presentation" id=$7><button type="button" id=$8>Henry Castillo </button></span><a aria-label=$9 id=$10><span id=$11>$12</span></a>Hello world! </div></div></div></div></div>\nT2: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4/><div role="presentation" id=$5>Hello world! </div></div></div></div></div>\nT3: <div role="treeitem" id=$1><div id=$2><div id=$3/><span aria-label="" id=$4>$5</span><span id=$6/></div></div>\nT4: <div role="treeitem" id=$1><div id=$2><div id=$3><span id=$4/><span id=$5>$6</span></div></div></div>\n\n<html><head/><body><div><div aria-label="Workspace primary actions" role="toolbar" id="44"><button aria-label="Show history" type="button" id="47"/><div><button aria-label="Search" type="button" id="51"><div id="52"/><span id="55">Search Cohort </span></button><button aria-label="Search filters" type="button" id="56"/></div><div><button aria-label="Help" type="button" id="64"/><button aria-label="User menu: Henry Castillo" type="button" id="68"><div id="69"><span id="70"><span id="71"/></span><i aria-label="Active" type="presence-online" title="Active" id="73"/><i aria-label="Active" type="presence-online" title="Active" id="74"/></div></button></div></div><div><div aria-label="Workspace secondary actions" role="toolbar" id="81"><div id="82"><div id="83"><button aria-label="Main menu for Cohort" type="button" id="84"><span id="85">Cohort </span><span id="86"/></button></div></div><button aria-label="New message" type="button" id="89"/></div><div aria-label="Workspace navigation"><div><div role="presentation" id="100"><div role="presentation" id="101"><div role="presentation" id="102"><div role="presentation" id="103"><div aria-label="Channels and direct messages" role="tree" id="104"><div role="treeitem" id="105"><div id="106"><span id="107"/><span id="110">Threads </span></div></div>{T4(111,112,113,114,117,"Mentions & reactions ")}{T4(118,119,120,121,124,"Drafts & sent ")}{T4(125,126,127,128,131,"Slack Connect ")}<div role="treeitem" id="132"><button type="button" id="133"><span id="134"/><span id="137">More </span></button></div><div aria-label="Channels" role="treeitem" id="140"><button type="button" id="146"><span id="147"><div id="148">Channels </div></span></button><div role="group" id="150"/></div>{T3(152,153,154,157,"ai-x-product ",158)}{T3(159,160,161,164,"cohortlabs ",165)}{T3(166,167,168,171,"general ",172)}{T3(173,174,175,178,"glados-ai-agent-analytics ",179)}{T3(180,181,182,185,"growth ",186)}{T3(187,188,189,192,"hello-world ",193)}{T3(194,195,196,199,"intros ",200)}{T3(201,202,203,206,"metrics-matter ",207)}{T3(208,209,210,213,"off-topic ",214)}{T3(215,216,217,220,"plg-clinic ",221)}{T3(222,223,224,227,"sponsor-new-relic ",228)}<div role="treeitem" id="229"><div id="230"><button type="button" id="231"><div id="232"><span id="234">Add channels </span></div></button></div></div><div aria-label="Direct Messages" role="treeitem" id="235"><button type="button" id="240"><span id="241"><div id="242">Direct messages </div></span></button><div role="group" id="248"/></div><div role="treeitem" id="250"><div id="251"><div id="252"><div id="253"/><span aria-label="" id="257"><span id="258">Slackbot </span></span><span id="259"/></div></div></div><div role="treeitem" id="262"><div id="263"><div id="264"><div id="265"><div id="269"/><i aria-label="Active" type="presence-online" title="Active" id="270"/><i aria-label="Active" type="presence-online" title="Active" id="271"/></div><span aria-label="" id="272"><span id="273">Henry Castillo </span><span id="274">you </span></span><span id="275"/></div></div></div><div role="treeitem" id="278"><div id="279"><div id="280"><div id="281"><div id="285"/><i aria-label="Active" type="presence-online" title="Active" id="286"/><i aria-label="Active" type="presence-online" title="Active" id="287"/></div><span aria-label="" id="288"><span id="289">Arisrei Lim </span></span><span id="290"/></div></div></div><div role="treeitem" id="293"><div id="294"><div id="295"><div id="296"><div id="300"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="301"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="302"/></div><span aria-label="" id="303"><span id="304">Esther Trapadoux </span></span><span id="305"/></div></div></div><div role="treeitem" id="308"><div id="309"><div id="310"><span id="312">Add coworkers </span></div></div></div><div role="treeitem" id="313"><div id="314"><div id="315"><div id="316"><span aria-label="" id="318">Free trial ends today </span></div></div></div></div></div></div></div><div role="presentation" id="321"/></div></div><input type="button" value="Collapse workspace navigation" id="327"/></div><div><div aria-label="Huddle controls" role="toolbar" id="334"><div><button type="button" id="345"><span id="346"><span id="347">hello-world </span></span></button><input aria-label="Huddle in hello-world" type="checkbox" role="button" id="353"/></div></div><div role="status" id="358"/></div></div></div><div aria-label="Channel hello-world" role="group" id="368"><div><div aria-label="Primary view actions" role="toolbar" id="371"><button aria-label="hello-world" type="button" id="374"><div id="375"><span id="376"/><span id="379">hello-world </span><div id="380"/></div></button><button aria-label="View 1 member. Includes you." type="button" id="385"><div id="387"><span id="388"><span id="389"/></span><span id="391">1 </span></div></button></div><div aria-label="Bookmarks" role="toolbar" id="392"><button aria-label="Add a bookmark" type="button" id="400">Add a bookmark </button></div><div role="presentation" id="404"><div role="presentation" id="410"><div role="presentation" id="411"><div role="presentation" id="412"><div role="presentation" id="413"><div aria-label="hello-world (private channel, has draft)" role="list" id="414">Loading history... <div role="presentation" id="416"><div aria-label="Today Press enter to select a date to jump to." role="listitem" id="417"><button aria-label="Jump to date" type="button" id="419">Today <span id="420"/></button></div></div>{T2(423,424,425,428,432)}{T2(439,440,441,444,448)}{T2(455,456,457,460,464)}{T2(471,472,473,476,480)}{T2(487,488,489,492,496)}{T2(503,504,505,508,512)}{T2(519,520,521,524,528)}{T2(535,536,537,540,544)}{T2(551,552,553,556,560)}{T2(567,568,569,572,576)}{T1(583,584,585,588,589,593,595,596,"Today at 12:58:38 PM",597,598,"12:58 PM ")}{T2(606,607,608,611,615)}{T2(622,623,624,627,631)}{T2(638,639,640,643,647)}{T2(654,655,656,659,663)}{T1(670,671,672,675,676,680,682,683,"Today at 1:22:12 PM",684,685,"1:22 PM ")}{T1(693,694,695,698,699,703,705,706,"Today at 1:29:34 PM",707,708,"1:29 PM ")}{T2(716,717,718,721,725)}{T2(732,733,734,737,741)}{T1(748,749,750,753,754,758,760,761,"Today at 1:39:01 PM",762,763,"1:39 PM ")}{T2(771,772,773,776,780)}{T2(787,788,789,792,796)}{T2(803,804,805,808,812)}{T2(819,820,821,824,828)}{T2(835,836,837,840,844)}{T2(851,852,853,856,860)}{T2(867,868,869,872,876)}{T2(883,884,885,888,892)}{T2(899,900,901,904,908)}{T2(915,916,917,920,924)}{T2(931,932,933,936,940)}</div></div></div><div role="presentation" id="947"/></div></div><div><div aria-label="composer" role="group" id="959"><div><div aria-label="Formatting" role="toolbar" id="962"><div><button aria-label="Bold" type="button" role="button" id="966"/><button aria-label="Italic" type="button" role="button" id="969"/><button aria-label="Strikethrough" type="button" role="button" id="972"/><button aria-label="Link" type="button" role="button" id="976"/><button aria-label="Ordered list" type="button" role="button" id="980"/><button aria-label="Bulleted list" type="button" role="button" id="983"/><button aria-label="Blockquote" type="button" role="button" id="987"/><button aria-label="Code" type="button" role="button" id="991"/><button aria-label="Code block" type="button" role="button" id="994"/></div></div><div aria-label="Message to hello-world" role="textbox" id="1003">Hello world! </div><div aria-label="Composer primary actions" role="toolbar" id="1009"><button aria-label="Attachments" type="button" id="1014"/><div><button aria-label="Formatting" type="button" id="1020"/><button aria-label="Emoji" type="button" id="1023"><div id="1024"/></button><button aria-label="Mention someone" type="button" id="1030"/><button aria-label="Record video clip" type="button" id="1034"/><button aria-label="Record audio clip" type="button" id="1037"/><button aria-label="Run shortcut" type="button" id="1041"/></div><span><button aria-label="Send now" type="button" id="1046"/><button aria-label="Schedule for later" type="button" id="1049"/></span></div></div></div><button type="button" id="1056"><b id="1057">Shift + Enter </b> to add a new line </button></div></div></div></div></div><div><div role="alert" id="1090">loading… </div><div role="log" id="1091"/></div></body></html>',
      response:
        '<Thought>I should click the "Send now" button to send the message</Thought>\n<Action>click(1046)</Action>',
      parsedResponse: {
        thought: 'I should click the "Send now" button to send the message',
        action: 'click(1046)',
        parsedAction: {
          name: 'click',
          args: {
            elementId: 1046,
          },
        },
      },
    },
    start: 16982.70000000298,
    elapsed: 3600.7999999970198,
    finished: 20583.5,
  },
  {
    eventInput: 'FinishAction',
    eventProperties: {
      actionId: 'c4c0ca9a-381f-42b3-aad0-46aa366fb4ef',
      action: 'click',
    },
    start: 20583.5,
    elapsed: 2990.8000000044703,
    finished: 23574.30000000447,
  },
  {
    eventInput: 'ProcessDOM',
    eventProperties: {
      actionId: 'ce2338ed-844a-4afa-b948-cc0d03b9cf0d',
    },
    start: 23574.30000000447,
    elapsed: 323.3999999985099,
    finished: 23897.70000000298,
  },
  {
    eventInput: 'DetermineAction',
    eventProperties: {
      actionId: 'ce2338ed-844a-4afa-b948-cc0d03b9cf0d',
      usage: {
        prompt_tokens: 3295,
        completion_tokens: 25,
        total_tokens: 3320,
      },
      prompt:
        'The user requests the following task:\n\nSend a "Hello world!" message\n\nYou have already taken the following actions: \n<Thought>I should focus on the message input and set the value to "Hello world!"</Thought>\n<Action>setValue(1003, "Hello world!")</Action>\n\n<Thought>I should click the "Send now" button to send the message</Thought>\n<Action>click(1046)</Action>\n\n\n\nCurrent time: 6/4/2023, 2:03:45 PM\n\nCurrent page contents:\nT1: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4><span role="presentation" id=$5/></div><div role="presentation" id=$6><span role="presentation" id=$7><button type="button" id=$8>Henry Castillo </button></span><a aria-label=$9 id=$10><span id=$11>$12</span></a>Hello world! </div></div></div></div></div>\nT2: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4/><div role="presentation" id=$5>Hello world! </div></div></div></div></div>\nT3: <div role="treeitem" id=$1><div id=$2><div id=$3/><span aria-label="" id=$4>$5</span><span id=$6/></div></div>\nT4: <div role="treeitem" id=$1><div id=$2><div id=$3><span id=$4/><span id=$5>$6</span></div></div></div>\n\n<html><head/><body><div><div aria-label="Workspace primary actions" role="toolbar" id="44"><button aria-label="Show history" type="button" id="47"/><div><button aria-label="Search" type="button" id="51"><div id="52"/><span id="55">Search Cohort </span></button><button aria-label="Search filters" type="button" id="56"/></div><div><button aria-label="Help" type="button" id="64"/><button aria-label="User menu: Henry Castillo" type="button" id="68"><div id="69"><span id="70"><span id="71"/></span><i aria-label="Active" type="presence-online" title="Active" id="73"/><i aria-label="Active" type="presence-online" title="Active" id="74"/></div></button></div></div><div><div aria-label="Workspace secondary actions" role="toolbar" id="81"><div id="82"><div id="83"><button aria-label="Main menu for Cohort" type="button" id="84"><span id="85">Cohort </span><span id="86"/></button></div></div><button aria-label="New message" type="button" id="89"/></div><div aria-label="Workspace navigation"><div><div role="presentation" id="100"><div role="presentation" id="101"><div role="presentation" id="102"><div role="presentation" id="103"><div aria-label="Channels and direct messages" role="tree" id="104"><div role="treeitem" id="105"><div id="106"><span id="107"/><span id="110">Threads </span></div></div>{T4(111,112,113,114,117,"Mentions & reactions ")}{T4(118,119,120,121,124,"Drafts & sent ")}{T4(125,126,127,128,131,"Slack Connect ")}<div role="treeitem" id="132"><button type="button" id="133"><span id="134"/><span id="137">More </span></button></div><div aria-label="Channels" role="treeitem" id="140"><button type="button" id="146"><span id="147"><div id="148">Channels </div></span></button><div role="group" id="150"/></div>{T3(152,153,154,157,"ai-x-product ",158)}{T3(159,160,161,164,"cohortlabs ",165)}{T3(166,167,168,171,"general ",172)}{T3(173,174,175,178,"glados-ai-agent-analytics ",179)}{T3(180,181,182,185,"growth ",186)}{T3(187,188,189,192,"hello-world ",193)}{T3(194,195,196,199,"intros ",200)}{T3(201,202,203,206,"metrics-matter ",207)}{T3(208,209,210,213,"off-topic ",214)}{T3(215,216,217,220,"plg-clinic ",221)}{T3(222,223,224,227,"sponsor-new-relic ",228)}<div role="treeitem" id="229"><div id="230"><button type="button" id="231"><div id="232"><span id="234">Add channels </span></div></button></div></div><div aria-label="Direct Messages" role="treeitem" id="235"><button type="button" id="240"><span id="241"><div id="242">Direct messages </div></span></button><div role="group" id="248"/></div><div role="treeitem" id="250"><div id="251"><div id="252"><div id="253"/><span aria-label="" id="257"><span id="258">Slackbot </span></span><span id="259"/></div></div></div><div role="treeitem" id="262"><div id="263"><div id="264"><div id="265"><div id="269"/><i aria-label="Active" type="presence-online" title="Active" id="270"/><i aria-label="Active" type="presence-online" title="Active" id="271"/></div><span aria-label="" id="272"><span id="273">Henry Castillo </span><span id="274">you </span></span><span id="275"/></div></div></div><div role="treeitem" id="278"><div id="279"><div id="280"><div id="281"><div id="285"/><i aria-label="Active" type="presence-online" title="Active" id="286"/><i aria-label="Active" type="presence-online" title="Active" id="287"/></div><span aria-label="" id="288"><span id="289">Arisrei Lim </span></span><span id="290"/></div></div></div><div role="treeitem" id="293"><div id="294"><div id="295"><div id="296"><div id="300"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="301"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="302"/></div><span aria-label="" id="303"><span id="304">Esther Trapadoux </span></span><span id="305"/></div></div></div><div role="treeitem" id="308"><div id="309"><div id="310"><span id="312">Add coworkers </span></div></div></div><div role="treeitem" id="313"><div id="314"><div id="315"><div id="316"><span aria-label="" id="318">Free trial ends today </span></div></div></div></div></div></div></div><div role="presentation" id="321"/></div></div><input type="button" value="Collapse workspace navigation" id="327"/></div><div><div aria-label="Huddle controls" role="toolbar" id="334"><div><button type="button" id="345"><span id="346"><span id="347">hello-world </span></span></button><input aria-label="Huddle in hello-world" type="checkbox" role="button" id="353"/></div></div><div role="status" id="358"/></div></div></div><div aria-label="Channel hello-world" role="group" id="368"><div><div aria-label="Primary view actions" role="toolbar" id="371"><button aria-label="hello-world" type="button" id="374"><div id="375"><span id="376"/><span id="379">hello-world </span><div id="380"/></div></button><button aria-label="View 1 member. Includes you." type="button" id="385"><div id="387"><span id="388"><span id="389"/></span><span id="391">1 </span></div></button></div><div aria-label="Bookmarks" role="toolbar" id="392"><button aria-label="Add a bookmark" type="button" id="400">Add a bookmark </button></div><div role="presentation" id="404"><div role="presentation" id="410"><div role="presentation" id="411"><div role="presentation" id="412"><div role="presentation" id="413"><div aria-label="hello-world (private channel, has draft)" role="list" id="414">Loading history... <div role="presentation" id="416"><div aria-label="Today Press enter to select a date to jump to." role="listitem" id="417"><button aria-label="Jump to date" type="button" id="419">Today <span id="420"/></button></div></div>{T2(423,424,425,428,432)}{T2(439,440,441,444,448)}{T2(455,456,457,460,464)}{T2(471,472,473,476,480)}{T2(487,488,489,492,496)}{T2(503,504,505,508,512)}{T2(519,520,521,524,528)}{T2(535,536,537,540,544)}{T2(551,552,553,556,560)}{T2(567,568,569,572,576)}{T1(583,584,585,588,589,593,595,596,"Today at 12:58:38 PM",597,598,"12:58 PM ")}{T2(606,607,608,611,615)}{T2(622,623,624,627,631)}{T2(638,639,640,643,647)}{T2(654,655,656,659,663)}{T1(670,671,672,675,676,680,682,683,"Today at 1:22:12 PM",684,685,"1:22 PM ")}{T1(693,694,695,698,699,703,705,706,"Today at 1:29:34 PM",707,708,"1:29 PM ")}{T2(716,717,718,721,725)}{T2(732,733,734,737,741)}{T1(748,749,750,753,754,758,760,761,"Today at 1:39:01 PM",762,763,"1:39 PM ")}{T2(771,772,773,776,780)}{T2(787,788,789,792,796)}{T2(803,804,805,808,812)}{T2(819,820,821,824,828)}{T2(835,836,837,840,844)}{T2(851,852,853,856,860)}{T2(867,868,869,872,876)}{T2(883,884,885,888,892)}{T2(899,900,901,904,908)}{T2(915,916,917,920,924)}{T2(931,932,933,936,940)}</div></div></div><div role="presentation" id="947"/></div></div><div aria-label="composer" role="group" id="959"><div><div aria-label="Formatting" role="toolbar" id="962"><div><button aria-label="Bold" type="button" role="button" id="966"/><button aria-label="Italic" type="button" role="button" id="969"/><button aria-label="Strikethrough" type="button" role="button" id="972"/><button aria-label="Link" type="button" role="button" id="976"/><button aria-label="Ordered list" type="button" role="button" id="980"/><button aria-label="Bulleted list" type="button" role="button" id="983"/><button aria-label="Blockquote" type="button" role="button" id="987"/><button aria-label="Code" type="button" role="button" id="991"/><button aria-label="Code block" type="button" role="button" id="994"/></div></div><div aria-label="Message to hello-world" role="textbox" id="1003"/><div aria-label="Composer primary actions" role="toolbar" id="1010"><button aria-label="Attachments" type="button" id="1015"/><div><button aria-label="Formatting" type="button" id="1021"/><button aria-label="Emoji" type="button" id="1024"><div id="1025"/></button><button aria-label="Mention someone" type="button" id="1031"/><button aria-label="Record video clip" type="button" id="1035"/><button aria-label="Record audio clip" type="button" id="1038"/><button aria-label="Run shortcut" type="button" id="1042"/></div><span><button aria-label="Send now" type="button" id="1047"/><button aria-label="Schedule for later" type="button" id="1050"/></span></div></div></div></div></div></div></div><div><div role="alert" id="1091">loading… </div><div role="log" id="1092"/></div></body></html>',
      response:
        '<Thought>It seems the message "Hello world!" has already been sent. Task complete.</Thought>\n<Action>finish()</Action>',
      parsedResponse: {
        thought:
          'It seems the message "Hello world!" has already been sent. Task complete.',
        action: 'finish()',
        parsedAction: {
          name: 'finish',
          args: {},
        },
      },
    },
    start: 23897.70000000298,
    elapsed: 3317.39999999851,
    finished: 27215.10000000149,
  },
  {
    eventInput: 'PerformAction',
    eventProperties: {
      actionId: 'ce2338ed-844a-4afa-b948-cc0d03b9cf0d',
      usage: {
        prompt_tokens: 3295,
        completion_tokens: 25,
        total_tokens: 3320,
      },
      prompt:
        'The user requests the following task:\n\nSend a "Hello world!" message\n\nYou have already taken the following actions: \n<Thought>I should focus on the message input and set the value to "Hello world!"</Thought>\n<Action>setValue(1003, "Hello world!")</Action>\n\n<Thought>I should click the "Send now" button to send the message</Thought>\n<Action>click(1046)</Action>\n\n\n\nCurrent time: 6/4/2023, 2:03:45 PM\n\nCurrent page contents:\nT1: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4><span role="presentation" id=$5/></div><div role="presentation" id=$6><span role="presentation" id=$7><button type="button" id=$8>Henry Castillo </button></span><a aria-label=$9 id=$10><span id=$11>$12</span></a>Hello world! </div></div></div></div></div>\nT2: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4/><div role="presentation" id=$5>Hello world! </div></div></div></div></div>\nT3: <div role="treeitem" id=$1><div id=$2><div id=$3/><span aria-label="" id=$4>$5</span><span id=$6/></div></div>\nT4: <div role="treeitem" id=$1><div id=$2><div id=$3><span id=$4/><span id=$5>$6</span></div></div></div>\n\n<html><head/><body><div><div aria-label="Workspace primary actions" role="toolbar" id="44"><button aria-label="Show history" type="button" id="47"/><div><button aria-label="Search" type="button" id="51"><div id="52"/><span id="55">Search Cohort </span></button><button aria-label="Search filters" type="button" id="56"/></div><div><button aria-label="Help" type="button" id="64"/><button aria-label="User menu: Henry Castillo" type="button" id="68"><div id="69"><span id="70"><span id="71"/></span><i aria-label="Active" type="presence-online" title="Active" id="73"/><i aria-label="Active" type="presence-online" title="Active" id="74"/></div></button></div></div><div><div aria-label="Workspace secondary actions" role="toolbar" id="81"><div id="82"><div id="83"><button aria-label="Main menu for Cohort" type="button" id="84"><span id="85">Cohort </span><span id="86"/></button></div></div><button aria-label="New message" type="button" id="89"/></div><div aria-label="Workspace navigation"><div><div role="presentation" id="100"><div role="presentation" id="101"><div role="presentation" id="102"><div role="presentation" id="103"><div aria-label="Channels and direct messages" role="tree" id="104"><div role="treeitem" id="105"><div id="106"><span id="107"/><span id="110">Threads </span></div></div>{T4(111,112,113,114,117,"Mentions & reactions ")}{T4(118,119,120,121,124,"Drafts & sent ")}{T4(125,126,127,128,131,"Slack Connect ")}<div role="treeitem" id="132"><button type="button" id="133"><span id="134"/><span id="137">More </span></button></div><div aria-label="Channels" role="treeitem" id="140"><button type="button" id="146"><span id="147"><div id="148">Channels </div></span></button><div role="group" id="150"/></div>{T3(152,153,154,157,"ai-x-product ",158)}{T3(159,160,161,164,"cohortlabs ",165)}{T3(166,167,168,171,"general ",172)}{T3(173,174,175,178,"glados-ai-agent-analytics ",179)}{T3(180,181,182,185,"growth ",186)}{T3(187,188,189,192,"hello-world ",193)}{T3(194,195,196,199,"intros ",200)}{T3(201,202,203,206,"metrics-matter ",207)}{T3(208,209,210,213,"off-topic ",214)}{T3(215,216,217,220,"plg-clinic ",221)}{T3(222,223,224,227,"sponsor-new-relic ",228)}<div role="treeitem" id="229"><div id="230"><button type="button" id="231"><div id="232"><span id="234">Add channels </span></div></button></div></div><div aria-label="Direct Messages" role="treeitem" id="235"><button type="button" id="240"><span id="241"><div id="242">Direct messages </div></span></button><div role="group" id="248"/></div><div role="treeitem" id="250"><div id="251"><div id="252"><div id="253"/><span aria-label="" id="257"><span id="258">Slackbot </span></span><span id="259"/></div></div></div><div role="treeitem" id="262"><div id="263"><div id="264"><div id="265"><div id="269"/><i aria-label="Active" type="presence-online" title="Active" id="270"/><i aria-label="Active" type="presence-online" title="Active" id="271"/></div><span aria-label="" id="272"><span id="273">Henry Castillo </span><span id="274">you </span></span><span id="275"/></div></div></div><div role="treeitem" id="278"><div id="279"><div id="280"><div id="281"><div id="285"/><i aria-label="Active" type="presence-online" title="Active" id="286"/><i aria-label="Active" type="presence-online" title="Active" id="287"/></div><span aria-label="" id="288"><span id="289">Arisrei Lim </span></span><span id="290"/></div></div></div><div role="treeitem" id="293"><div id="294"><div id="295"><div id="296"><div id="300"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="301"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="302"/></div><span aria-label="" id="303"><span id="304">Esther Trapadoux </span></span><span id="305"/></div></div></div><div role="treeitem" id="308"><div id="309"><div id="310"><span id="312">Add coworkers </span></div></div></div><div role="treeitem" id="313"><div id="314"><div id="315"><div id="316"><span aria-label="" id="318">Free trial ends today </span></div></div></div></div></div></div></div><div role="presentation" id="321"/></div></div><input type="button" value="Collapse workspace navigation" id="327"/></div><div><div aria-label="Huddle controls" role="toolbar" id="334"><div><button type="button" id="345"><span id="346"><span id="347">hello-world </span></span></button><input aria-label="Huddle in hello-world" type="checkbox" role="button" id="353"/></div></div><div role="status" id="358"/></div></div></div><div aria-label="Channel hello-world" role="group" id="368"><div><div aria-label="Primary view actions" role="toolbar" id="371"><button aria-label="hello-world" type="button" id="374"><div id="375"><span id="376"/><span id="379">hello-world </span><div id="380"/></div></button><button aria-label="View 1 member. Includes you." type="button" id="385"><div id="387"><span id="388"><span id="389"/></span><span id="391">1 </span></div></button></div><div aria-label="Bookmarks" role="toolbar" id="392"><button aria-label="Add a bookmark" type="button" id="400">Add a bookmark </button></div><div role="presentation" id="404"><div role="presentation" id="410"><div role="presentation" id="411"><div role="presentation" id="412"><div role="presentation" id="413"><div aria-label="hello-world (private channel, has draft)" role="list" id="414">Loading history... <div role="presentation" id="416"><div aria-label="Today Press enter to select a date to jump to." role="listitem" id="417"><button aria-label="Jump to date" type="button" id="419">Today <span id="420"/></button></div></div>{T2(423,424,425,428,432)}{T2(439,440,441,444,448)}{T2(455,456,457,460,464)}{T2(471,472,473,476,480)}{T2(487,488,489,492,496)}{T2(503,504,505,508,512)}{T2(519,520,521,524,528)}{T2(535,536,537,540,544)}{T2(551,552,553,556,560)}{T2(567,568,569,572,576)}{T1(583,584,585,588,589,593,595,596,"Today at 12:58:38 PM",597,598,"12:58 PM ")}{T2(606,607,608,611,615)}{T2(622,623,624,627,631)}{T2(638,639,640,643,647)}{T2(654,655,656,659,663)}{T1(670,671,672,675,676,680,682,683,"Today at 1:22:12 PM",684,685,"1:22 PM ")}{T1(693,694,695,698,699,703,705,706,"Today at 1:29:34 PM",707,708,"1:29 PM ")}{T2(716,717,718,721,725)}{T2(732,733,734,737,741)}{T1(748,749,750,753,754,758,760,761,"Today at 1:39:01 PM",762,763,"1:39 PM ")}{T2(771,772,773,776,780)}{T2(787,788,789,792,796)}{T2(803,804,805,808,812)}{T2(819,820,821,824,828)}{T2(835,836,837,840,844)}{T2(851,852,853,856,860)}{T2(867,868,869,872,876)}{T2(883,884,885,888,892)}{T2(899,900,901,904,908)}{T2(915,916,917,920,924)}{T2(931,932,933,936,940)}</div></div></div><div role="presentation" id="947"/></div></div><div aria-label="composer" role="group" id="959"><div><div aria-label="Formatting" role="toolbar" id="962"><div><button aria-label="Bold" type="button" role="button" id="966"/><button aria-label="Italic" type="button" role="button" id="969"/><button aria-label="Strikethrough" type="button" role="button" id="972"/><button aria-label="Link" type="button" role="button" id="976"/><button aria-label="Ordered list" type="button" role="button" id="980"/><button aria-label="Bulleted list" type="button" role="button" id="983"/><button aria-label="Blockquote" type="button" role="button" id="987"/><button aria-label="Code" type="button" role="button" id="991"/><button aria-label="Code block" type="button" role="button" id="994"/></div></div><div aria-label="Message to hello-world" role="textbox" id="1003"/><div aria-label="Composer primary actions" role="toolbar" id="1010"><button aria-label="Attachments" type="button" id="1015"/><div><button aria-label="Formatting" type="button" id="1021"/><button aria-label="Emoji" type="button" id="1024"><div id="1025"/></button><button aria-label="Mention someone" type="button" id="1031"/><button aria-label="Record video clip" type="button" id="1035"/><button aria-label="Record audio clip" type="button" id="1038"/><button aria-label="Run shortcut" type="button" id="1042"/></div><span><button aria-label="Send now" type="button" id="1047"/><button aria-label="Schedule for later" type="button" id="1050"/></span></div></div></div></div></div></div></div><div><div role="alert" id="1091">loading… </div><div role="log" id="1092"/></div></body></html>',
      response:
        '<Thought>It seems the message "Hello world!" has already been sent. Task complete.</Thought>\n<Action>finish()</Action>',
      parsedResponse: {
        thought:
          'It seems the message "Hello world!" has already been sent. Task complete.',
        action: 'finish()',
        parsedAction: {
          name: 'finish',
          args: {},
        },
      },
    },
    start: 27215.10000000149,
    elapsed: 10.700000002980232,
    finished: 27225.80000000447,
  },
  {
    eventInput: 'ActionSuccess',
    eventProperties: {
      actionId: 'ce2338ed-844a-4afa-b948-cc0d03b9cf0d',
      parsedResponse: {
        thought:
          'It seems the message "Hello world!" has already been sent. Task complete.',
        action: 'finish()',
        parsedAction: {
          name: 'finish',
          args: {},
        },
      },
    },
    start: 27225.80000000447,
    elapsed: 3.6999999955296516,
    finished: 27229.5,
  },
  {
    eventInput: 'FinishTask',
    eventProperties: {
      usage: {
        prompt_tokens: 3295,
        completion_tokens: 25,
        total_tokens: 3320,
      },
      prompt:
        'The user requests the following task:\n\nSend a "Hello world!" message\n\nYou have already taken the following actions: \n<Thought>I should focus on the message input and set the value to "Hello world!"</Thought>\n<Action>setValue(1003, "Hello world!")</Action>\n\n<Thought>I should click the "Send now" button to send the message</Thought>\n<Action>click(1046)</Action>\n\n\n\nCurrent time: 6/4/2023, 2:03:45 PM\n\nCurrent page contents:\nT1: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4><span role="presentation" id=$5/></div><div role="presentation" id=$6><span role="presentation" id=$7><button type="button" id=$8>Henry Castillo </button></span><a aria-label=$9 id=$10><span id=$11>$12</span></a>Hello world! </div></div></div></div></div>\nT2: <div role="listitem" id=$1><div role="presentation" id=$2><div role="document" id=$3><div><div role="presentation" id=$4/><div role="presentation" id=$5>Hello world! </div></div></div></div></div>\nT3: <div role="treeitem" id=$1><div id=$2><div id=$3/><span aria-label="" id=$4>$5</span><span id=$6/></div></div>\nT4: <div role="treeitem" id=$1><div id=$2><div id=$3><span id=$4/><span id=$5>$6</span></div></div></div>\n\n<html><head/><body><div><div aria-label="Workspace primary actions" role="toolbar" id="44"><button aria-label="Show history" type="button" id="47"/><div><button aria-label="Search" type="button" id="51"><div id="52"/><span id="55">Search Cohort </span></button><button aria-label="Search filters" type="button" id="56"/></div><div><button aria-label="Help" type="button" id="64"/><button aria-label="User menu: Henry Castillo" type="button" id="68"><div id="69"><span id="70"><span id="71"/></span><i aria-label="Active" type="presence-online" title="Active" id="73"/><i aria-label="Active" type="presence-online" title="Active" id="74"/></div></button></div></div><div><div aria-label="Workspace secondary actions" role="toolbar" id="81"><div id="82"><div id="83"><button aria-label="Main menu for Cohort" type="button" id="84"><span id="85">Cohort </span><span id="86"/></button></div></div><button aria-label="New message" type="button" id="89"/></div><div aria-label="Workspace navigation"><div><div role="presentation" id="100"><div role="presentation" id="101"><div role="presentation" id="102"><div role="presentation" id="103"><div aria-label="Channels and direct messages" role="tree" id="104"><div role="treeitem" id="105"><div id="106"><span id="107"/><span id="110">Threads </span></div></div>{T4(111,112,113,114,117,"Mentions & reactions ")}{T4(118,119,120,121,124,"Drafts & sent ")}{T4(125,126,127,128,131,"Slack Connect ")}<div role="treeitem" id="132"><button type="button" id="133"><span id="134"/><span id="137">More </span></button></div><div aria-label="Channels" role="treeitem" id="140"><button type="button" id="146"><span id="147"><div id="148">Channels </div></span></button><div role="group" id="150"/></div>{T3(152,153,154,157,"ai-x-product ",158)}{T3(159,160,161,164,"cohortlabs ",165)}{T3(166,167,168,171,"general ",172)}{T3(173,174,175,178,"glados-ai-agent-analytics ",179)}{T3(180,181,182,185,"growth ",186)}{T3(187,188,189,192,"hello-world ",193)}{T3(194,195,196,199,"intros ",200)}{T3(201,202,203,206,"metrics-matter ",207)}{T3(208,209,210,213,"off-topic ",214)}{T3(215,216,217,220,"plg-clinic ",221)}{T3(222,223,224,227,"sponsor-new-relic ",228)}<div role="treeitem" id="229"><div id="230"><button type="button" id="231"><div id="232"><span id="234">Add channels </span></div></button></div></div><div aria-label="Direct Messages" role="treeitem" id="235"><button type="button" id="240"><span id="241"><div id="242">Direct messages </div></span></button><div role="group" id="248"/></div><div role="treeitem" id="250"><div id="251"><div id="252"><div id="253"/><span aria-label="" id="257"><span id="258">Slackbot </span></span><span id="259"/></div></div></div><div role="treeitem" id="262"><div id="263"><div id="264"><div id="265"><div id="269"/><i aria-label="Active" type="presence-online" title="Active" id="270"/><i aria-label="Active" type="presence-online" title="Active" id="271"/></div><span aria-label="" id="272"><span id="273">Henry Castillo </span><span id="274">you </span></span><span id="275"/></div></div></div><div role="treeitem" id="278"><div id="279"><div id="280"><div id="281"><div id="285"/><i aria-label="Active" type="presence-online" title="Active" id="286"/><i aria-label="Active" type="presence-online" title="Active" id="287"/></div><span aria-label="" id="288"><span id="289">Arisrei Lim </span></span><span id="290"/></div></div></div><div role="treeitem" id="293"><div id="294"><div id="295"><div id="296"><div id="300"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="301"/><i aria-label="Away, notifications snoozed" type="presence-dnd-offline" title="Away, notifications snoozed" id="302"/></div><span aria-label="" id="303"><span id="304">Esther Trapadoux </span></span><span id="305"/></div></div></div><div role="treeitem" id="308"><div id="309"><div id="310"><span id="312">Add coworkers </span></div></div></div><div role="treeitem" id="313"><div id="314"><div id="315"><div id="316"><span aria-label="" id="318">Free trial ends today </span></div></div></div></div></div></div></div><div role="presentation" id="321"/></div></div><input type="button" value="Collapse workspace navigation" id="327"/></div><div><div aria-label="Huddle controls" role="toolbar" id="334"><div><button type="button" id="345"><span id="346"><span id="347">hello-world </span></span></button><input aria-label="Huddle in hello-world" type="checkbox" role="button" id="353"/></div></div><div role="status" id="358"/></div></div></div><div aria-label="Channel hello-world" role="group" id="368"><div><div aria-label="Primary view actions" role="toolbar" id="371"><button aria-label="hello-world" type="button" id="374"><div id="375"><span id="376"/><span id="379">hello-world </span><div id="380"/></div></button><button aria-label="View 1 member. Includes you." type="button" id="385"><div id="387"><span id="388"><span id="389"/></span><span id="391">1 </span></div></button></div><div aria-label="Bookmarks" role="toolbar" id="392"><button aria-label="Add a bookmark" type="button" id="400">Add a bookmark </button></div><div role="presentation" id="404"><div role="presentation" id="410"><div role="presentation" id="411"><div role="presentation" id="412"><div role="presentation" id="413"><div aria-label="hello-world (private channel, has draft)" role="list" id="414">Loading history... <div role="presentation" id="416"><div aria-label="Today Press enter to select a date to jump to." role="listitem" id="417"><button aria-label="Jump to date" type="button" id="419">Today <span id="420"/></button></div></div>{T2(423,424,425,428,432)}{T2(439,440,441,444,448)}{T2(455,456,457,460,464)}{T2(471,472,473,476,480)}{T2(487,488,489,492,496)}{T2(503,504,505,508,512)}{T2(519,520,521,524,528)}{T2(535,536,537,540,544)}{T2(551,552,553,556,560)}{T2(567,568,569,572,576)}{T1(583,584,585,588,589,593,595,596,"Today at 12:58:38 PM",597,598,"12:58 PM ")}{T2(606,607,608,611,615)}{T2(622,623,624,627,631)}{T2(638,639,640,643,647)}{T2(654,655,656,659,663)}{T1(670,671,672,675,676,680,682,683,"Today at 1:22:12 PM",684,685,"1:22 PM ")}{T1(693,694,695,698,699,703,705,706,"Today at 1:29:34 PM",707,708,"1:29 PM ")}{T2(716,717,718,721,725)}{T2(732,733,734,737,741)}{T1(748,749,750,753,754,758,760,761,"Today at 1:39:01 PM",762,763,"1:39 PM ")}{T2(771,772,773,776,780)}{T2(787,788,789,792,796)}{T2(803,804,805,808,812)}{T2(819,820,821,824,828)}{T2(835,836,837,840,844)}{T2(851,852,853,856,860)}{T2(867,868,869,872,876)}{T2(883,884,885,888,892)}{T2(899,900,901,904,908)}{T2(915,916,917,920,924)}{T2(931,932,933,936,940)}</div></div></div><div role="presentation" id="947"/></div></div><div aria-label="composer" role="group" id="959"><div><div aria-label="Formatting" role="toolbar" id="962"><div><button aria-label="Bold" type="button" role="button" id="966"/><button aria-label="Italic" type="button" role="button" id="969"/><button aria-label="Strikethrough" type="button" role="button" id="972"/><button aria-label="Link" type="button" role="button" id="976"/><button aria-label="Ordered list" type="button" role="button" id="980"/><button aria-label="Bulleted list" type="button" role="button" id="983"/><button aria-label="Blockquote" type="button" role="button" id="987"/><button aria-label="Code" type="button" role="button" id="991"/><button aria-label="Code block" type="button" role="button" id="994"/></div></div><div aria-label="Message to hello-world" role="textbox" id="1003"/><div aria-label="Composer primary actions" role="toolbar" id="1010"><button aria-label="Attachments" type="button" id="1015"/><div><button aria-label="Formatting" type="button" id="1021"/><button aria-label="Emoji" type="button" id="1024"><div id="1025"/></button><button aria-label="Mention someone" type="button" id="1031"/><button aria-label="Record video clip" type="button" id="1035"/><button aria-label="Record audio clip" type="button" id="1038"/><button aria-label="Run shortcut" type="button" id="1042"/></div><span><button aria-label="Send now" type="button" id="1047"/><button aria-label="Schedule for later" type="button" id="1050"/></span></div></div></div></div></div></div></div><div><div role="alert" id="1091">loading… </div><div role="log" id="1092"/></div></body></html>',
      response:
        '<Thought>It seems the message "Hello world!" has already been sent. Task complete.</Thought>\n<Action>finish()</Action>',
    },
    start: 27229.5,
    elapsed: null,
    finished: null,
  },
];

export const eventTypeToHumanText = {
  StartTask: 'Task Started',
  ProcessDOM: 'Reading Page',
  DetermineAction: 'Thinking',
  PerformAction: 'Performing Action',
  FinishAction: 'Waiting for next action',
  CancelTask: 'Cancelled',
  FinishTask: 'Finished',
};

export function formatDuration(milliseconds: number) {
  const seconds = (milliseconds / 1000).toFixed(2);
  const minutes = Math.floor(parseFloat(seconds) / 60);
  const remainingSeconds = (parseFloat(seconds) % 60).toFixed(2);

  const minuteString = minutes > 0 ? `${minutes} m` : '';
  const secondString =
    parseFloat(remainingSeconds) > 0 ? `${remainingSeconds} s` : '';

  if (minutes > 0 && parseFloat(remainingSeconds) > 0) {
    return `${minuteString} and ${secondString}`;
  } else {
    return `${minuteString}${secondString}`;
  }
}

const pixelPerMs = 0.02;
const barWidthUpdateInterval = 10;
const hoverCardDelay = 100;

export default function Waterfall({
  setSelectedEventIndex,
}: {
  setSelectedEventIndex: (index: number | null) => void;
}) {
  const [startTime, setStartTime] = React.useState<number>(0);
  const [currentBarWidth, setCurrentBarWidth] = React.useState<number>(0);
  const [currentElapse, setCurrentElapse] = React.useState<number>(0);
  const [isGrowing, setIsGrowing] = React.useState<boolean>(false);
  const waterfallChartRef = React.useRef<HTMLDivElement>(null);

  const storedEvents = useEventStore.getState().events;
  // const currentBarWidth = useEventStore.getState().currentBarWidth
  // const currentElapse = useEventStore.getState().currentElapse
  // FOR FRONTEND DEV PURPOSES ONLY
  // const storedEvents = sampleEvents;

  useEffect(() => {
    console.log('Events fetched from Zustand', storedEvents);
    if (storedEvents.length > 0) {
      if (storedEvents.length == 1) {
        setStartTime(storedEvents[0].start);
      } else {
        startTime === 0 && setStartTime(storedEvents[0].start);
      }
      storedEvents.length > 11 &&
        waterfallChartRef.current?.scrollBy({ top: 24 });

      // useEventStore.setState({
      //   currentBarWidth: 0,
      //   currentElapse: 0
      // })
      setCurrentBarWidth(0);
      setCurrentElapse(0);
      if (
        storedEvents[storedEvents.length - 1].finished ||
        storedEvents[storedEvents.length - 1].eventInput === 'FinishTask'
      ) {
        setIsGrowing(false);
      } else {
        setIsGrowing(true);
      }
    }
  }, [storedEvents]);

  const calcWidth = (event: IWaterfallEvent) => {
    if (event.finished) {
      return (event.finished - event.start) * pixelPerMs;
    } else if (timeOrigin !== null) {
      return (performance.now() - timeOrigin - event.start) * pixelPerMs;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const barInterval = setInterval(() => {
      if (isGrowing) {
        // useEventStore.setState({
        //   events: storedEvents,
        //   currentBarWidth: currentBarWidth + pixelPerMs * barWidthUpdateInterval,
        //   currentElapse: currentElapse + barWidthUpdateInterval,
        // })
        setCurrentBarWidth(
          (width) => width + pixelPerMs * barWidthUpdateInterval
        );

        setCurrentElapse((elapse) => elapse + barWidthUpdateInterval);
        // Scroll to the right if the last bar is about to go out of view
        if ((performance.now() - startTime) * pixelPerMs > 315) {
          waterfallChartRef.current?.scrollBy({
            left: pixelPerMs * barWidthUpdateInterval,
          });
        }
      }
    }, barWidthUpdateInterval);
    return () => clearInterval(barInterval);
  }, [isGrowing]);

  return (
    <div className="grow flex flex-col">
      {/* Legends */}
      <div className="flex flex-row justify-end gap-4">
        <div className="flex flex-row gap-1 items-center">
          <div className="h-3 rounded-[4px] w-6 bg-sky-300"></div>
          <small>Reading Page</small>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="h-3 rounded-[4px] w-6 bg-blue-400"></div>
          <small>Thinking</small>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="h-3 rounded-[4px] w-6 bg-blue-500"></div>
          <small>Performing action</small>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="h-3 rounded-[4px] w-6 bg-gray-200"></div>
          <small>Waiting/Other Action</small>
        </div>
      </div>
      {/* Waterfall chart */}
      <div
        ref={waterfallChartRef}
        className="min-h-[320px] grow mt-4 overflow-scroll relative scrollbar-hide"
      >
        {/* Time labels */}
        <div className="flex flex-row top-0 sticky">
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">5 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">10 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">15 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">20 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">25 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">30 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">35 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">40 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">45 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">50 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">55 s</small>
          </div>
          <div className="w-[100px] shrink-0">
            <small className="text-gray-400 float-right pr-2 pt-1">1m 0s</small>
          </div>
        </div>
        {/* Chart */}
        <div className=" h-max relative">
          {/* Gridlines */}
          <div className="h-full flex flex-row absolute top-0 left-0">
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
            <div className="h-full w-[100px] shrink-0 border-r border-gray-100"></div>
          </div>
          {/* Waterfall Bars */}
          <div className="pt-7">
            {storedEvents.length > 0 &&
              storedEvents.map((event, index) => {
                console.log(startTime);
                const barWidth = event.finished
                  ? calcWidth(event)
                  : currentBarWidth;

                if (
                  event.eventInput === 'ProcessDOM' ||
                  event.eventInput === 'DetermineAction' ||
                  event.eventInput === 'PerformAction' ||
                  event.eventInput === 'FinishAction'
                ) {
                  return (
                    <HoverCard.Root
                      key={index}
                      openDelay={hoverCardDelay}
                      closeDelay={hoverCardDelay}
                    >
                      <HoverCard.Trigger asChild>
                        <button
                          className={clsx(
                            'h-6 rounded-[4px] cursor-pointer block focus:outline-offset-2 focus:outline focus:outline-2',
                            event.eventInput === 'ProcessDOM'
                              ? 'bg-sky-300 hover:bg-sky-400 focus:outline-sky-400'
                              : event.eventInput === 'DetermineAction'
                              ? 'bg-blue-300 hover:bg-blue-400 focus:outline-blue-400'
                              : event.eventInput === 'PerformAction'
                              ? 'bg-blue-500 hover:bg-blue-600 focus:outline-blue-600'
                              : event.eventInput === 'FinishAction' &&
                                'bg-gray-200 hover:bg-gray-300 focus:outline-gray-300'
                          )}
                          style={{
                            position: 'relative',
                            width: barWidth,
                            left: (event.start - startTime) * pixelPerMs,
                          }}
                          onClick={() => setSelectedEventIndex(index)}
                        ></button>
                      </HoverCard.Trigger>
                      <HoverCard.Portal>
                        <HoverCard.Content
                          sideOffset={5}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '8px',
                            gap: '4px',
                            background: '#0f172a',
                            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.18)',
                            borderRadius: '4px',
                            width: '149px',
                          }}
                        >
                          <p className=" text-xs capitalize">
                            {eventTypeToHumanText[event.eventInput]}
                          </p>
                          <div className="flex flex-row items-end gap-[6px]">
                            <h3 className=" text-base">
                              {event.elapsed
                                ? formatDuration(event.elapsed)
                                : formatDuration(currentElapse)}
                            </h3>
                          </div>
                          <HoverCard.Arrow style={{ fill: '#0f172a' }} />
                        </HoverCard.Content>
                      </HoverCard.Portal>
                    </HoverCard.Root>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
