cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-p5moLab/downloads/../p5projects"
#
echo unzip 1 "Water bonobo-m5CKtY0uE"
rm -rf "./Water bonobo-m5CKtY0uE"
mkdir "./Water bonobo-m5CKtY0uE"
pushd "./Water bonobo-m5CKtY0uE" > /dev/null
unzip -q "../../downloads/zips/Water bonobo-m5CKtY0uE"
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