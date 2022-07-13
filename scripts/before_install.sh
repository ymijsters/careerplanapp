sudo rm -f /home/ec2-user/stdout.txt
sudo rm -f /home/ec2-user/stderr.txt
for p in `ps -e|grep "node"|cut -f1 -d' '`; do   kill -9 $p  > /dev/null 2> /dev/null || :; done
for p in `ps -e|grep "npm"|cut -f1 -d' '`; do    kill -9 $p  > /dev/null 2> /dev/null || :; done