interface MI1_0_0 {
  schemaVersion: string;
  name: string;
  version: string;
  authors?: {
    name: string;
    roles?: string[];
    description?: string;
    image?: string;
    website?: string;
  }[];
  websites?: string[];
  image?: string;
  readme?: string;
  setFileSystemFlags?: {
    [path: string]: string;
  };
  steps?: {
    name: string;
    groups: {
      name: string;
      mode: string;
      failure?: string;
      options?: {
        [option: string]: {
          requiredFlags?: string[];
          description: string[];
          image: string;
          forbiddenFlags?: string[];
          setFlags?: string[];
        }
      }
    }[]:
    readme?: string;
    requiredFlags?: string[];
    forbiddenFlags?: string[];
  }[];
  installFolders?: {
    from: string;
    to: string;
    requiredFlags?: string[];
    forbiddeFlags?: string[];
  }[];
  installFiles?: {
    from: string;
    to: string;
    requiredFlags?: string[];
    forbiddeFlags?: string[];
  }[];
}
interface MI1_0_1 extends MI1_0_0 {}
interface MI1_0_2 extends MI1_0_1 {}
interface MI1_1_0 extends MI1_0_2 {
  remoteFileIdentifier?: {
    domain: string;
    id: number;
  }[];
  remoteFileFlags?: {
    domain: string;
    id: number;
    flag: string;
    minVersion?: string;
    maxVersion?: string;
  }[];
}
interface MI1_2_0 extends MI1_1_0 {
  languages?: string[];
}

export MI1_0_0;
export MI1_0_1;
export MI1_0_2;
export MI1_1_0;
export MI1_2_0;

export default MI1_2_0;//latest
