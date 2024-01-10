# [p5mirror](https://github.com/molab-itp/p5mirror)

mirror your p5js.editor sketches into a git repo

- Where are my p5js.editor sketches and collections ?
  - make sure that all your p5js.editor projects are available in a git repo
  - be prepared if p5js.editor server fails
- How ?
  - command line scripts download your p5 sketches with associated media files
  - mark down files generated to list sketches and collections
  - index file generated for your projects for github pages

## Recommended apps

- https://code.visualstudio.com/

- https://desktop.github.com/

### VS Code extensions

- https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

- https://marketplace.visualstudio.com/items?itemName=Swimm.swimm

## Usage

```

# p5name is the place holder for your p5js.editor user name

# clone this repo as folder p5mirror

# create a new repo, named it p5mirror-p5name
# where p5name is your p5js.editor user name
# clone it next to p5mirror

# in your preo p5mirror-p5name, add these file to .gitignore
- .DS_Store
- downloads/zips

# your folder structure should look like this

p5mirror
p5mirror-p5name

# in your p5mirror-p5name folder, run p5mirror/bin/build.sh

cd p5mirror-p5name
../p5mirror/bin/build.sh --user p5name --downloads ../p5mirror-p5name/downloads
../p5mirror/bin/build.sh --user p5name

# run downloads shell script generated by build.sh

sh downloads/gen/download.sh

# run unzip shell script

sh downloads/gen/unzip.sh

# run build p5projects-index.md shell script

../p5mirror/bin/build-p5projects-index.sh --user p5name --downloads ../p5mirror-p5name/downloads
../p5mirror/bin/build-p5projects-index.sh --user p5name

```

# github pages for this repo

[https://molab-itp.github.io/p5mirror/](https://molab-itp.github.io/p5mirror/)

# search p5mirror on github for other repos

[https://github.com/search?q=p5mirror&type=repositories](https://github.com/search?q=p5mirror&type=repositories)

## Generated files

- [p5projects-index](./p5projects-index.md)

### Listings

- [downloads/gen/sketches_recent.md](./downloads/gen/sketches_recent.md)
- [downloads/gen/sketches.md](./downloads/gen/sketches.md)
- [downloads/gen/collections.md](./downloads/gen/collections.md)

### Shell scripts to download and unzip

- [downloads/gen/download.sh](./downloads/gen/download.sh)
- [downloads/gen/unzip.sh](./downloads/gen/unzip.sh)

### JSON source from p5js.editor

- [downloads/json/collections.json](./downloads/json/collections.json)
- [downloads/json/sketches.json](./downloads/json/sketches.json)
