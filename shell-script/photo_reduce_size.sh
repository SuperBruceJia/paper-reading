PHOTODIR=$1
PHOTOFORMAT=$2

IFS_OLD=$IFS
IFS=$'\n'

if [ ! -d "$PHOTODIR"/new ]; then
    mkdir "$PHOTODIR"/new
fi

cd $PHOTODIR;

for img in `find ./ -name "*.$PHOTOFORMAT"`; do 
    convert -resize 1200x $img new/$img;
    jpegoptim --max=95 new/$img
done

IFS=IFS_OLD
