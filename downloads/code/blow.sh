#!/bin/bash
 
lien="$1"
dossier=""
exclure="$2"
 
wget -nv -nc -nd -X $exclure -r -linf -A zip,rar $lien
for file in `ls` do
    if ( expr "$file" : .*rar$ ) > /dev/null
    then
        echo "Extraction de : $file"
        dossier=`basename $file .rar`
        mkdir $dossier unrar x $file $dossier > /dev/null
        if (( $? != 0 ))
        then
            echo "$file" >> error.log
        else
	    rm $file echo $lien/$file >> sup.log
        fi
    elif ( expr "$file" : .*zip$ ) > /dev/null
    then
        echo "Extraction de : $file"
        dossier=`basename $file .zip`
        mkdir $dossier unzip $file -d $dossier> /dev/null
        if (( $? != 0 ))
        then
            echo "$file" >> error.log
	else
	    rm $file echo $lien/$file >> sup.log
	fi
    fi
done

exit 0 
