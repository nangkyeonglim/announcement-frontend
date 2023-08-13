export type Channel = {
  channelName: string;
  channelId: string;
};

export type Notice = {
  writer: string;
  title: string;
  content: string;
  channelId: string;
};
