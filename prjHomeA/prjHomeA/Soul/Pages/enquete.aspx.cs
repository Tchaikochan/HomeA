using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class enquete : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();

            string Title = Request["t"].ToString();
            if (Title == "" || Title == null)
            {
                return;

            }
            string DS = Request["d"].ToString();
            if (DS == "" || DS == null)
            {
                return;

            }
            string CS = Request["s"].ToString();
            if (CS == "" || CS == null)
            {
                return;

            }
            string VL = Request["v"].ToString();
            if (VL == "" || VL == null)
            {
                return;

            }

            string Condominio = Request["c"].ToString();
            if (Condominio == "" || Condominio == null)
            {
                return;

            }

            int Counter = 0;
            Banco.openBar("localhost", "root", "root", "HomeA");
            Banco.getCommand("SELECT * from Enquete");
            while (Banco.Selected.Read())
            {
                Counter++;

            }

            Banco.Refresh();
            Banco.openBar();
            Banco.setCommand("INSERT INTO Enquete VALUES('" + Title + "','" + DS + "',CURRENT_TIME()," + Counter.ToString() + ");");
            Banco.Refresh();

            string[] Yahoo = CS.Split('☻');
            for (int i = 0; i < Yahoo.Length - 1; i++)
            {
                string Reich = Yahoo[i].Substring(0, Yahoo[i].IndexOf('☺'));
                string Second = Yahoo[i].Substring(Yahoo[i].IndexOf('☺') + 1);
                Banco.openBar();
                Banco.setCommand("INSERT INTO Pergunta VALUES('" + Reich + "'," + Second + "," + Counter.ToString() + ");");
                Banco.Refresh();

            }

            string[] Respostas = VL.Split('☻');
            for (int i = 0; i < Respostas.Length - 1; i++)
            {
                string Reich = Respostas[i].Substring(0, Respostas[i].IndexOf('☺'));
                string Second = Respostas[i].Substring(Respostas[i].IndexOf('☺') + 1, (Respostas[i].IndexOf('♥') - Respostas[i].IndexOf('☺') - 1));
                string Third = Respostas[i].Substring(Respostas[i].IndexOf('♥') + 1);
                Banco.openBar();
                Banco.setCommand("INSERT INTO Alternativa VALUES(" + Third + ",'" + Reich + "'," + Second + "," + Counter.ToString() + ");");
                Banco.Refresh();    

            }

        }
    }
}