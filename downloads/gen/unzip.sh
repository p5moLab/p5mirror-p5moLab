cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-p5moLab/downloads/../p5projects"
#
echo unzip 1 "Disco pamphlet-38Q6KH_qj"
rm -rf "./Disco pamphlet-38Q6KH_qj"
mkdir "./Disco pamphlet-38Q6KH_qj"
pushd "./Disco pamphlet-38Q6KH_qj" > /dev/null
unzip -q "../../downloads/zips/Disco pamphlet-38Q6KH_qj"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi