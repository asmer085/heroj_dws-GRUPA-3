# Generated by Django 3.1.14 on 2023-05-30 15:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('herojAPI', '0013_auto_20230527_1848'),
    ]

    operations = [
        migrations.AddField(
            model_name='nesrece_simptomi',
            name='prva_pomoc',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='herojAPI.postupciprvepomoci'),
        ),
    ]
